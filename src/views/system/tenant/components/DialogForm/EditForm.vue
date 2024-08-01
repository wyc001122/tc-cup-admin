<script setup lang='ts'>
import { ElLoading, type FormInstance } from 'element-plus'
import EleCropperModal from 'ele-admin-plus/es/ele-cropper-modal/index'
import { oss_endpoint_put_file } from '@/api/modules/cup-resource/oss'
import { Upload, Picture as IconPicture } from '@element-plus/icons-vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  data: {
    type: Object,
    default: () => {},
  },
  type: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['submit'])
const modelValue = defineModel<boolean>('modelValue')
const form = ref<any>({})

const formRef = ref<FormInstance>()
const rules = ref({
  tenantName: [
    { required: true, message: '请输入租户名称', trigger: 'blur' },
  ],
  systemName: [
    { required: true, message: '请输入系统名称', trigger: 'blur' },
  ],
  jsonStr: [
    {
      trigger: 'blur',
      validator: (rule: any, value: any, callback: any) => {
        if (!value) {
          callback()
        }
        try {
          JSON.parse(value)
          callback()
        }
        catch (e) {
          callback(new Error('请输入合法的Json串'))
        }
      },
    },
  ],
})

function close() {
  modelValue.value = false
}

function submit() {
  formRef.value?.validate((valid: any) => {
    if (valid) {
      emits('submit', form.value)
    }
  })
}

onMounted(() => {
  form.value = { ...props.data }
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
        form.value.systemLogo = res.data.link
        loading.close()
        visible.value = false
      }
    })
    .catch((e) => {
      loading.close()
      ElMessage.error(e.message)
    })
}
</script>

<template>
  <el-dialog
    v-model="modelValue"
    form
    :title="title"
    width="700px"
    :destroy-on-close="true"
    draggable
    overflow
    top="15vh"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-suffix="："
      label-width="120px"
      @keyup.enter="submit"
      @submit.prevent=""
    >
      <row-col :span="12">
        <el-form-item label="租户名称" prop="tenantName">
          <el-input v-model="form.tenantName" placeholder="请输入租户名称" clearable />
        </el-form-item>
        <el-form-item label="租户ID" prop="tenantId">
          <el-input
            v-if="type === 'add'"
            v-model="form.tenantId"
            placeholder="自动生成"
            clearable
            :disabled="true"
          />
          <el-input
            v-else-if="type === 'edit'"
            v-model="form.tenantId"
            clearable
            readonly
          />
        </el-form-item>
        <el-form-item label="系统名称" prop="systemName">
          <el-input v-model="form.systemName" placeholder="请输入系统名称" clearable />
        </el-form-item>
        <el-form-item label="账号额度" prop="expireTime">
          <el-input v-model="form.expireTime" placeholder="请输入账号额度" clearable />
        </el-form-item>
        <el-form-item label="绑定域名" prop="domain">
          <el-input v-model="form.domain" placeholder="请输入绑定域名" clearable />
        </el-form-item>

        <el-form-item label="联系人" prop="linkman">
          <el-input v-model="form.linkman" placeholder="请输入联系人" clearable />
        </el-form-item>
        <el-form-item label="联系电话" prop="contactNumber">
          <el-input v-model="form.contactNumber" placeholder="请输入联系电话" clearable />
        </el-form-item>
        <el-form-item label="联系地址" prop="address">
          <el-input v-model="form.address" type="textarea" placeholder="请输入联系地址" clearable />
        </el-form-item>

        <el-form-item label="系统Logo" prop="systemLogo">
          <div class="info-user-avatar" @click="openCropper">
            <el-image style="width: 100px;aspect-ratio: 52 / 60;" :src="form.systemLogo" fit="contain">
              <template #error>
                <el-icon>
                  <IconPicture />
                </el-icon>
              </template>
            </el-image>
            <el-icon class="info-user-avatar-icon">
              <Upload style="stroke-width: 3;" />
            </el-icon>
          </div>
        </el-form-item>
        <el-form-item label="自定义Json串" prop="jsonStr">
          <el-input
            v-model="form.jsonStr"
            type="textarea"
            :rows="4"
            placeholder="请输入自定义Json串"
            clearable
          />
        </el-form-item>
      </row-col>
    </el-form>

    <template #footer>
      <el-button @click="close">
        取消
      </el-button>
      <el-button type="primary" @click="submit">
        保存
      </el-button>
    </template>
  </el-dialog>

  <EleCropperModal
    v-model="visible"
    :preview="false"
    :src="form.systemLogo"
    :options="{ aspectRatio: 52 / 60, autoCropArea: 1, viewMode: 1, dragMode: 'move' }"
    :modal-props="{ destroyOnClose: true }"
    :to-blob="true"
    @done="onCrop"
  />
</template>

<style scoped lang='scss'>
.info-user-avatar {
  position: relative;
  display: inline-block;
  line-height: 0;
  cursor: pointer;

  .el-image {
    display: flex;
    align-items: center;
    justify-content: center;
    border: var(--el-border);
    border-radius: var(--el-border-radius-base);
  }

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
    border-radius: var(--el-border-radius-base);
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
</style>
