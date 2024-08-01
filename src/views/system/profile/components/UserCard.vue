<script lang="ts" setup>
import { ref } from 'vue'
import { Upload } from '@element-plus/icons-vue'
import { oss_endpoint_put_file } from '@/api/modules/cup-resource/oss'
import EleCropperModal from 'ele-admin-plus/es/ele-cropper-modal/index'
import { ElLoading } from 'element-plus'
import { update } from '@/api/modules/cup-user/index'
import useUserStore from '@/store/modules/user'

const porps = defineProps({
  data: {
    required: true,
    type: Object,
  },
})

const userStore = useUserStore()

const postName = computed(() => {
  return porps?.data?.postName?.split(',') ?? []
})

const roleName = computed(() => {
  return porps?.data?.roleName?.split(',') ?? []
})

const visible = ref(false)

function openCropper() {
  visible.value = true
}

function onCrop(blob: any) {
  visible.value = false
  const loading = ElLoading.service({
  })
  oss_endpoint_put_file({ file: blob }, {
    headers: {
      'content-Type': 'multipart/form-data',
    },
  })
    .then((res) => {
      if (res.code === 200) {
        form.value.avatar = res.data.link

        saveHandler()

        loading.close()
        visible.value = false
      }
    })
    .catch((e) => {
      loading.close()
      ElMessage.error(e.message)
    })
}

const loading = ref(false)
function saveHandler() {
  loading.value = true
  update({
    ...porps.data,
    avatar: form.value.avatar,
  }).then((res) => {
    if (res.code === 200) {
      ElMessage.success('修改成功')
      userStore.getUserInfo()
    }
  }).finally(() => {
    loading.value = false
  })
}

const form = ref<any>({})
onMounted(() => {
  form.value = {
    ...porps.data,
  }
})
</script>

<template>
  <ele-card class="profile-center">
    <div class="info-user">
      <div class="info-user-avatar" @click="openCropper">
        <el-avatar :size="100" :src="form.avatar" />
        <el-icon class="info-user-avatar-icon">
          <Upload style="stroke-width: 3;" />
        </el-icon>
      </div>
      <div>
        <el-text style="margin-top: 5px;font-size: 24px;">
          {{ form.name }}
        </el-text>
      </div>
    </div>
    <div class="info-list">
      <div class="info-item">
        <el-icon>
          <EnvironmentOutlined />
        </el-icon>
        <div class="info-item-text">
          所属租户： {{ form.tenantName }}
        </div>
      </div>
      <div class="info-item">
        <el-icon>
          <UserOutlined />
        </el-icon>
        <div class="info-item-text">
          部门： {{ form.deptName }}
        </div>
      </div>
      <div class="info-item">
        <el-icon>
          <UserOutlined />
        </el-icon>
        <div class="info-item-text">
          岗位： <el-tag v-for="item in postName" :key="item" class="m-b-[5px] m-r-[5px]">
            {{ item }}
          </el-tag>
        </div>
      </div>
      <div class="info-item">
        <el-icon>
          <CityOutlined style="transform: translateY(-1px);" />
        </el-icon>
        <div class="info-item-text">
          角色： <el-tag v-for="item in roleName" :key="item" class="m-b-[5px] m-r-[5px]">
            {{ item }}
          </el-tag>
        </div>
      </div>

      <div class="info-item">
        <el-icon>
          <TagOutlined style="transform: translateY(-1px);" />
        </el-icon>
        <div class="info-item-text">
          生日：{{ form.birthday }}
        </div>
      </div>
      <div class="info-item">
        <el-icon>
          <TagOutlined style="transform: translateY(-1px);" />
        </el-icon>
        <div class="info-item-text">
          创建时间：{{ form.createTime }}
        </div>
      </div>
      <div class="info-item">
        <el-icon>
          <TagOutlined style="transform: translateY(-1px);" />
        </el-icon>
        <div class="info-item-text">
          更新时间：{{ form.updateTime }}
        </div>
      </div>
    </div>

    <EleCropperModal
      v-model="visible"
      :src="form.avatar"
      :options="{ aspectRatio: 1, autoCropArea: 1, viewMode: 1, dragMode: 'move' }"
      :modal-props="{ destroyOnClose: true }"
      :to-blob="true"
      @done="onCrop"
    />
  </ele-card>
</template>

<style lang="scss" scoped>
.profile-center {
  .el-form-item {
    margin-bottom: 0;
  }

  .info-user {
    box-sizing: border-box;
    padding-top: 8px;
    text-align: center;

    .info-user-avatar {
      position: relative;
      display: inline-block;
      line-height: 0;
      cursor: pointer;

      .info-user-avatar-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 2;
        display: none;
        font-size: 30px;
        color: #fff;
        transform: translate(-50%, -50%);
      }

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        background-color: transparent;
        border-radius: 50%;
        transition: background-color 0.3s;
      }

      &:hover {
        .info-user-avatar-icon {
          display: block;
        }

        &::after {
          background-color: rgb(0 0 0 / 40%);
        }
      }
    }
  }

  .info-list {
    margin: 35px 0 24px;

    .info-item {
      display: flex;
      align-items: center;

      & > .el-icon {
        font-size: 16px;
      }

      .info-item-text {
        box-sizing: border-box;
        flex: 1;
        padding-left: 8px;
      }

      & + .info-item {
        margin-top: 10px;
      }
    }
  }
}
</style>
