<script lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'

export default {
  name: 'ImageTransition',
  props: {
    initialImage: {
      type: String,
      required: true,
    },
    intensity: {
      type: Number,
      default: 0.3,
    },
    duration: {
      type: Number,
      default: 1.0,
    },
  },
  setup(props, { expose }) {
    const container = ref<any>(null)
    let scene: any, camera: any, renderer: any, material: any, mesh: any
    let startTime: any
    let isTransitioning = false
    const currentContainerSize = { width: 0, height: 0 }
    let animationFrameId: any = null
    let isMounted = false

    const vertexShader = `
      varying vec2 vUv;
      uniform vec2 uvScale;
      uniform vec2 uvOffset;
      void main() {
        vUv = uv * uvScale + uvOffset;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      uniform sampler2D texture1;
      uniform sampler2D texture2;
      uniform float intensity;
      uniform float progress;
      varying vec2 vUv;

      void main() {
        vec3 tex1 = texture2D(texture1, vUv).rgb;
        vec3 tex2 = texture2D(texture2, vUv).rgb;
        float displace1 = (tex1.r + tex1.g + tex1.b) * 0.128;
        float displace2 = (tex2.r + tex2.g + tex2.b) * 0.128;

        vec2 uv1 = vec2(vUv.x + progress * (displace2 * intensity), vUv.y);
        vec2 uv2 = vec2(vUv.x - (1.0 - progress) * (displace1 * intensity), vUv.y);

        vec4 t1 = texture2D(texture1, uv1);
        vec4 t2 = texture2D(texture2, uv2);

        gl_FragColor = mix(t1, t2, progress);
      }
    `

    const initThree = () => {
      scene = new THREE.Scene()
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(container.value.clientWidth, container.value.clientHeight)
      container.value.appendChild(renderer.domElement)

      const loader = new THREE.TextureLoader()
      const texture1 = loader.load(props.initialImage, updateAspect)
      const texture2 = loader.load(props.initialImage, updateAspect)

      material = new THREE.ShaderMaterial({
        uniforms: {
          texture1: { value: texture1 },
          texture2: { value: texture2 },
          intensity: { value: props.intensity },
          progress: { value: 0 },
          uvScale: { value: new THREE.Vector2(1, 1) },
          uvOffset: { value: new THREE.Vector2(0, 0) },
        },
        vertexShader,
        fragmentShader,
      })

      mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
      scene.add(mesh)

      startTime = Date.now()
      animate()
    }

    const updateAspect = () => {
      if (!material || !material.uniforms.texture1.value.image) {
        return
      }

      const containerAspect = currentContainerSize.width / currentContainerSize.height
      const imageAspect = material.uniforms.texture1.value.image.width / material.uniforms.texture1.value.image.height

      const uvScale = new THREE.Vector2(1, 1)
      const uvOffset = new THREE.Vector2(0, 0)

      // 始终填满高度，根据需要裁剪宽度
      uvScale.x = containerAspect / imageAspect
      uvOffset.x = (1 - uvScale.x) / 2

      material.uniforms.uvScale.value.copy(uvScale)
      material.uniforms.uvOffset.value.copy(uvOffset)
    }

    const animate = () => {
      if (!isMounted || !renderer) {
        return
      }

      animationFrameId = requestAnimationFrame(animate)

      // 检查并更新容器大小
      if (container.value) {
        const newWidth = container.value.clientWidth
        const newHeight = container.value.clientHeight
        if (newWidth !== currentContainerSize.width || newHeight !== currentContainerSize.height) {
          currentContainerSize.width = newWidth
          currentContainerSize.height = newHeight
          renderer.setSize(newWidth, newHeight)
          updateAspect()
        }
      }

      if (isTransitioning) {
        const elapsedTime = (Date.now() - startTime) / 1000
        material.uniforms.progress.value = Math.min(elapsedTime / props.duration, 1)
        if (elapsedTime >= props.duration) {
          isTransitioning = false
          material.uniforms.texture1.value = material.uniforms.texture2.value
          material.uniforms.progress.value = 0
        }
      }

      renderer.render(scene, camera)
    }

    const transitionTo = (newImageUrl: any) => {
      if (!isMounted || !material) {
        return
      }

      const loader = new THREE.TextureLoader()
      material.uniforms.texture2.value = loader.load(newImageUrl, updateAspect)
      material.uniforms.progress.value = 0
      startTime = Date.now()
      isTransitioning = true
    }

    const cleanUp = () => {
      isMounted = false
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = null
      }
      if (renderer) {
        renderer.dispose()
        if (container.value && container.value.contains(renderer.domElement)) {
          container.value.removeChild(renderer.domElement)
        }
        renderer = null
      }
      if (material) {
        material.dispose()
        material = null
      }
      if (mesh) {
        mesh.geometry.dispose()
        mesh = null
      }
      if (scene) {
        scene.clear()
        scene = null
      }
      camera = null
    }

    onMounted(() => {
      isMounted = true
      if (container.value) {
        currentContainerSize.width = container.value.clientWidth
        currentContainerSize.height = container.value.clientHeight
        initThree()
      }
    })

    onUnmounted(() => {
      cleanUp()
    })

    watch(() => props.intensity, (newValue) => {
      if (material) {
        material.uniforms.intensity.value = newValue
      }
    })

    expose({ transitionTo })

    return { container }
  },
}
</script>

<template>
  <div ref="container" :style="{ width: '100%', height: '100%', overflow: 'hidden' }" />
</template>
