<script setup lang='ts'>
import {
  menu_list,
  menu_detail,
  menu_submit,
  menu_remove,
} from '@/api/modules/cup-sys/menu'
import { Plus, Delete, ArrowDown, ArrowUp, QuestionFilled } from '@element-plus/icons-vue'
import { useFilterData, DEFAULT_DATA } from './utils'
import type { VxeTableInstance } from 'vxe-table'
import { useClipboard } from '@vueuse/core'
import type { FormInstance, FormRules } from 'element-plus'
import { filterTree, eachTree } from '@/utils/common-utils'

const {
  copy,
  copied,
} = useClipboard()

/** 权限 */
const permissions = usePermissions()
const permissionList = computed(() => {
  return {
    addBtn: permissions['system:menu:add'],
    delBtn: permissions['system:menu:del'],
    editBtn: permissions['system:menu:edit'],
    viewBtn: permissions['system:menu:view'],
  }
})

interface SearchForm {
  /** 关键字 */
  keywords?: string
  /** 是否保留父级 */
  withParents?: boolean
}

const searchForm = ref<SearchForm>({})

/** 过滤数据Function */
const filterHandler = useFilterData(searchForm)

/** 接口返回数据 */
const loading = ref(false)
const tableData = ref<ExtractAxiosData<typeof menu_list>>([])
const id2Parent = ref<any>({})
/** 获取数据 */
function getTableData() {
  loading.value = true
  menu_list().then((res) => {
    tableData.value = res.data
    eachTree(tableData.value, (item: any, index, parent) => {
      id2Parent.value[item.id] = parent
    })
  }).finally(() => {
    loading.value = false
  })
}

/** 过滤后的数据 */
const filterTableData = computed(() => filterHandler(tableData.value))
const widthoutBtnTableData = computed(() => {
  const topItem = [{
    id: '0',
    name: '顶级节点',
    children: filterTree(JSON.parse(JSON.stringify(tableData.value)), (item: any) => item.category === 0),
  }]
  return topItem
})

/** 新增/编辑 form */
const formData = ref<any>({})
const formRules = ref<FormRules>({
  category: [
    {
      required: true,
      message: '请选择类型',
      trigger: 'change',
    },
  ],
  name: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'blur',
    },
  ],
  path: [
    {
      required: computed(() => formData.value.category === 1) as any,
      message: '请输入路径',
      trigger: 'blur',
    },
  ],
  code: [
    {
      required: true,
      message: '请输入权限标识',
      trigger: 'blur',
    },
  ],
})
/** 新增/编辑 dialog */
const dialogInfo = ref({
  visible: false,
  title: '新增',
})
const formRef = ref<FormInstance>()
watch(() => dialogInfo.value.visible, (value) => {
  if (!value) {
    formRef.value?.clearValidate?.()
  }
})
/** 新增 */
function addRow() {
  // 默认值
  const defaultSort = tableData.value[tableData.value.length - 1]?.sort ?? 0
  formData.value = {
    ...DEFAULT_DATA.ADD,
    sort: defaultSort + 1,
  }
  dialogInfo.value.title = '新增节点'
  dialogInfo.value.visible = true
}

/** 编辑 */
function editRow(row: any) {
  menu_detail({ id: row.id }).then((res) => {
    if (res.code === 200) {
      formData.value = res.data
      dialogInfo.value.title = '编辑节点'
      dialogInfo.value.visible = true
    }
  })
}

/** 添加子项 */
function addSonRow(row: any) {
  dialogInfo.value.title = '新增节点'
  const _path = row.path
  const defaultSort = row.children[row.children.length - 1]?.sort ?? 0

  formData.value = {
    ...DEFAULT_DATA.ADDSON,
    parentId: row.id,
    sort: defaultSort + 1,
    path: _path.endsWith('/index')
      ? _path.split('/index')[0]
      : _path,
  }
  dialogInfo.value.visible = true
}

/** 批量删除 */
function batchDelHandler() {
  const _nodes = tableRef.value?.getCheckboxRecords()
  if (_nodes && _nodes.length === 0) {
    ElMessage.warning('请选择要删除的数据！')
  }
  else {
    deleteRow(_nodes)
  }
}
function deleteRow(rows: any) {
  rows = Array.isArray(rows) ? rows : [rows]
  const _ids = rows.map((item: any) => item.id)
  const _idsString = _ids.join(',')
  ElMessageBox.confirm('确定将选择数据删除?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    menu_remove({}, { params: {
      ids: _idsString,
    } }).then((res) => {
      if (res.code === 200) {
        ElMessage({
          type: 'success',
          message: '操作成功!',
        })
        getTableData()
      }
    })
  })
}

function submitHandler() {
  formRef.value?.validate((valid) => {
    if (valid) {
      const _params = {
        ...formData.value,
      }
      menu_submit(_params).then((res) => {
        if (res.code === 200) {
          ElMessage.success(res.msg)

          dialogInfo.value.visible = false
          getTableData()
        }
      })
    }
  })
}

function parentIdChange(value: any) {
  const parent = id2Parent.value[value]
  let defaultSort
  if (parent) {
    defaultSort = parent.children[parent.children.length - 1]?.sort ?? 0
  }
  else {
    defaultSort = tableData.value[tableData.value.length - 1]?.sort ?? 0
  }
  formData.value.sort = defaultSort + 1
}

function categoryChange(value: any) {
  if (value === 0) {
    // 菜单:保持 showLink === true isOpen === 0
    formData.value.showLink = true
    formData.value.isOpen = 0
  }
  else if (value === 1) {
    // 页面:保持

  }
  else if (value === 2) {
    // 按钮:保持
  }
}

/** vxe-table 实例 */
const tableRef = ref<VxeTableInstance>()
/** 展开全部 */
function expandAll() {
  tableRef.value?.setAllTreeExpand(true)
}
/** 收起全部 */
function collapseAll() {
  tableRef.value?.clearTreeExpand()
}

onMounted(() => {
  getTableData()
})
</script>

<template>
  <ele-page :flex-table="true">
    <ele-card :body-style="{ paddingBottom: '2px' }">
      <el-form :model="searchForm" label-suffix="：" label-width="100px">
        <el-form-item label="关键字" prop="keywords">
          <el-input v-model="searchForm.keywords" placeholder="请输入菜单名称或路由地址" clearable style="width: 400px;">
            <template #append>
              <el-checkbox v-model="searchForm.withParents">
                保留父级
              </el-checkbox>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </ele-card>
    <ele-card :flex-table="true">
      <ele-page :plain="true" class="m-b-[20px]">
        <el-button v-if="permissionList.addBtn" :icon="Plus" type="primary" @click="addRow">
          新 增
        </el-button>
        <el-button v-if="permissionList.delBtn" :icon="Delete" type="danger" @click="batchDelHandler">
          批量删除
        </el-button>
        <el-button :icon="ArrowDown" @click="expandAll">
          展开全部
        </el-button>
        <el-button :icon="ArrowUp" @click="collapseAll">
          收起全部
        </el-button>
      </ele-page>
      <ele-page :flex-table="true" :plain="true">
        <vxe-table
          ref="tableRef"
          height="auto"
          :loading="loading"
          :data="filterTableData"
          :row-config="{ useKey: true }"
          :column-config="{ resizable: false, useKey: true }"
          :tree-config="{}"
          :expand-config="{ reserve: true }"
          :show-overflow="true"
          :checkbox-config="{ labelField: 'name', checkStrictly: true }"
        >
          <vxe-column
            type="checkbox"
            field="name"
            title="节点名称"
            min-width="250"
            tree-node
          >
            <template #default="{ row }">
              <span>
                <SvgIcon
                  v-if="row.source"
                  :name="row.source"
                  style=" margin-right: 4px;vertical-align: text-bottom;"
                  size="19px"
                />
                <span v-html="row.name" />
              </span>
            </template>
          </vxe-column>
          <vxe-column
            title="路由地址"
            field="path"
            type="html"
            min-width="80"
          />
          <vxe-column
            title="权限标识"
            field="code"
            type="html"
            min-width="80"
          />
          <vxe-column
            title="排序"
            field="sort"
            min-width="100"
            align="center"
          />
          <vxe-column title="操作" header-align="center" width="160">
            <template #default="{ row }">
              <div class="flex gap-[10px]">
                <el-link
                  v-if="permissionList.editBtn"
                  :underline="false"
                  type="primary"
                  @click="editRow(row)"
                >
                  编辑
                </el-link>
                <el-link
                  v-if="permissionList.editBtn"
                  :underline="false"
                  type="primary"
                  @click="addSonRow(row)"
                >
                  添加子项
                </el-link>
                <el-link
                  v-if="permissionList.delBtn"
                  :underline="false"
                  type="info"
                  @click="deleteRow(row)"
                >
                  删除
                </el-link>
              </div>
            </template>
          </vxe-column>
        </vxe-table>
      </ele-page>
    </ele-card>
    <ele-modal v-model="dialogInfo.visible" form :title="dialogInfo.title" width="500px">
      <el-form
        ref="formRef"
        label-width="94px"
        :model="formData"
        :rules="formRules"
        :validate-on-rule-change="false"
        @submit.prevent=""
      >
        <el-form-item label="上级节点" prop="parentId">
          <el-tree-select
            v-model="formData.parentId"
            node-key="id"
            :default-expanded-keys="[formData.parentId]"
            :data="widthoutBtnTableData"
            :check-strictly="true"
            :props="{ value: 'id', label: 'name' }"
            style="width: 100%;"
            filterable
            clearable
            @change="parentIdChange"
          />
        </el-form-item>
        <el-form-item label="节点类型" prop="category">
          <el-radio-group v-model="formData.category" @change="categoryChange">
            <el-radio-button :label="0">
              菜单
            </el-radio-button>
            <el-radio-button :label="1">
              页面
            </el-radio-button>
            <el-radio-button :label="2">
              按钮
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="节点名称" prop="name">
          <el-input v-model="formData.name" placeholder="请输入节点名称" />
        </el-form-item>
        <el-form-item v-if="formData.category === 0 || formData.category === 1" v-motion-fade label="节点路径" prop="path">
          <el-input v-model="formData.path" placeholder="请输入节点路径" />
        </el-form-item>
        <el-form-item v-if="formData.category === 2" v-motion-fade label="权限标识" prop="code">
          <el-input v-model="formData.code" placeholder="请输入权限标识" />
        </el-form-item>
        <el-form-item v-if="formData.category === 0 || formData.category === 1" v-motion-fade label="节点图标" prop="source">
          <div class="flex gap-[10px]">
            <IconPicker v-model="formData.source" />
            <el-button
              v-if="formData.source"
              :type="copied ? 'success' : ''"
              text
              :disabled="copied"
              @click="copy(formData.source)"
            >
              {{ !copied ? formData.source : '复制成功' }}
            </el-button>
          </div>
        </el-form-item>
        <el-row v-if="formData.category === 1" v-motion-fade>
          <el-col :span="12">
            <el-form-item label="外部链接" prop="isOpen">
              <el-radio-group
                v-model="formData.isOpen"
                :text-color="formData.isOpen === 0 ? 'var(--el-text-color-regular)' : '#ffffff'"
                :fill="formData.isOpen === 0 ? 'var(--el-fill-color-light)' : 'var(--el-color-primary)'"
              >
                <el-radio-button :label="0">
                  否
                </el-radio-button>
                <el-radio-button :label="1">
                  是
                </el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="显示节点" prop="showLink">
              <el-radio-group
                v-model="formData.showLink"
                text-color="formData.isOpen === 0 ? 'var(--el-text-color-regular)' : '#ffffff'"
                :fill="formData.showLink === false ? 'var(--el-fill-color-light)' : 'var(--el-color-primary)'"
              >
                <el-radio-button :label="false">
                  否
                </el-radio-button>
                <el-radio-button :label="true">
                  是
                </el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item v-if="formData.category !== 2" v-motion-fade label="节点排序" prop="sort">
          <el-input-number v-model="formData.sort" :min="0" placeholder="请输入排序" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogInfo.visible = false">
          取消
        </el-button>
        <el-button type="primary" @click="submitHandler">
          确定
        </el-button>
      </template>
    </ele-modal>
  </ele-page>
</template>

<style scoped lang='scss'>
:deep(.keyword-lighten) {
  color: #000;
  background-color: #ff0;
}
</style>
