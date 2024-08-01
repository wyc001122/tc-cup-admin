<script setup lang='ts'>
import type { FormInstance } from 'element-plus'
import { eachTree, filterTree } from '@/utils/common-utils'
import { package_detail } from '@/api/modules/cup-system/package'
import { ArrowRight } from '@element-plus/icons-vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  data: {
    type: Object,
    default: () => { },
  },
})

const emits = defineEmits(['submit'])
const modelValue = defineModel<boolean>('modelValue')

const allMenuList = inject<any>('allMenuList')
const packageList = inject<any>('packageList')

const form = ref<any>({})
const defaultCheckedKeys = ref([])
const treeRef = ref<any>()
const resMenus = computed(() => {
  if (treeRef.value) {
    const currentCheckedKeys = treeRef.value.getCheckedNodes(false, true)
    const _curIds = currentCheckedKeys.map((item: any) => item.id)
    const _arr = filterTree(JSON.parse(JSON.stringify(allMenuList.value)), (item: any) => {
      return _curIds.includes(item.id)
    })
    return _arr
  }
  else {
    return []
  }
})

const formRef = ref<FormInstance>()
// 基础信息必填
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

function appendDefaultCheckedKeys(ids: any, showMessage = false) {
  const _oldLength = defaultCheckedKeys.value.length
  const _set: any = new Set([...defaultCheckedKeys.value, ...ids])
  const _resLength = _set.size
  defaultCheckedKeys.value = Array.from(_set)
  if (showMessage) {
    const _addLength = _resLength - _oldLength
    if (_addLength > 0) {
      ElMessage.success(`该产品包共${ids.length}个菜单，成功追加${_resLength - _oldLength}个`)
    }
    else {
      ElMessage.info(`该产品包共${ids.length}个菜单，已全部存在`)
    }
  }
}

/** 获取叶子节点id集合 */
function getTreeLeafNode(treeData: any) {
  const _key: any = []
  if (treeData && treeData.length > 0) {
    eachTree(treeData, (item: any) => {
      if (!item.children) {
        _key.push(item.id)
      }
    })
  }
  return _key
}

const id2Menus = ref<any>({})
function appendMenus(item: any) {
  if (id2Menus.value[item.id]) {
    const _key: any = getTreeLeafNode(id2Menus.value[item.id])
    if (_key.length === 0) {
      ElMessage.warning('该产品包未配置菜单!')
      return
    }
    appendDefaultCheckedKeys(_key, true)
  }
  else {
    package_detail({ id: item.id }).then((res) => {
      if (res.code === 200) {
        const _key: any = getTreeLeafNode(res.data.menus)
        id2Menus.value[item.id] = res.data.menus
        if (_key.length === 0) {
          ElMessage.warning('该产品包未配置菜单!')
          return
        }
        appendDefaultCheckedKeys(_key, true)
      }
    })
  }
}

function close() {
  modelValue.value = false
}

function submit() {
  formRef.value?.validate((valid: any) => {
    if (valid) {
      const currentCheckedKeys = treeRef.value.getCheckedNodes(false, true)
      emits('submit', {
        menus: currentCheckedKeys,
        tenantId: props.data.tenantId,
      })
    }
  })
}

onMounted(() => {
  form.value = { ...props.data }
  // 初始化选中的菜单
  appendDefaultCheckedKeys(getTreeLeafNode(form.value.menuList))
})

const active = ref('setting')
</script>

<template>
  <el-dialog
    v-model="modelValue"
    :title="title"
    :destroy-on-close="true"
    form
    width="600px"
    draggable
    overflow
    top="15vh"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-position="top"
      label-suffix="："
      label-width="120px"
    >
      <el-form-item>
        <ele-tabs
          v-model="active"
          type="plain"
          style="width: 100%;"
          :items="[
            { name: 'setting', label: '配置' },
            { name: 'view', label: '预览' },
          ]"
        />
      </el-form-item>
      <el-row v-show="active === 'setting'" :gutter="20">
        <el-col :span="24">
          <el-form-item>
            <el-alert
              type="warning"
              description="点击左侧击产品包，追加租户菜单，若菜单已存在则不会重复追加"
              :closable="false"
            />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="产品包" prop="packageId">
            <div class="colBox">
              <el-tree
                v-model="form.packageId"
                style="width: 100%;"
                :data="packageList"
                node-key="id"
                :props="{ label: 'packageName' }"
                @node-click="appendMenus"
              />
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="14">
          <el-form-item label="租户菜单" prop="packageId">
            <div class="colBox">
              <el-tree
                ref="treeRef"
                v-model="form.menuId"
                style="width: 100%;"
                :default-checked-keys="defaultCheckedKeys"
                :data="allMenuList"
                node-key="id"
                :props="{ label: 'name' }"
                show-checkbox
              />
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-show="active === 'view'">
        <el-col :span="24">
          <el-form-item label="租户菜单" prop="packageId">
            <div class="colBox">
              <el-tree
                style="width: 100%;"
                :data="resMenus"
                node-key="id"
                :props="{ label: 'name' }"
              />
            </div>
          </el-form-item>
        </el-col>
      </el-row>
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
</template>

<style scoped lang='scss'>
.colBox {
  position: relative;
  box-sizing: border-box;
  gap: 0;
  width: 100%;
  height: 350px;
  padding: 8px;
  overflow-y: auto;
  border: 1px solid var(--el-border-color);
  border-radius: var(--el-border-radius-base);
  box-shadow: none;
  transition: all 0.2s;

  &:hover {
    border: 1px solid #ff6526;
    box-shadow: 0 0 0 2px #ffe0d4;
  }
}
</style>
