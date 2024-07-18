<script lang="ts" setup>
// 接口
import { add, getList, getMenu, remove, update } from '@/api/system/menu'
// 权限
import useTablePermission from '@/hooks/crud/useTablePermission'
import { usePermissionStoreHook } from '@/stores/modules/permission'
import { initRouter } from '@/router/utils'
import { ElMessage, ElMessageBox } from 'element-plus'

const { permission } = useTablePermission()
const permissionList = computed(() => ({
  addBtn: permission.value.menu_add || false,
  viewBtn: permission.value.menu_view || false,
  delBtn: permission.value.menu_delete || false,
  editBtn: permission.value.menu_edit || false,
}))
// 数据
const tableRef = ref()
const tableData = ref([])
const filterTableData = ref([])
function getTableData() {
  getList().then((res: any) => {
    tableData.value = res.data
    searchEvent()
  })
}

// 搜索
const filterName = ref('')
const withParents = ref(true)
function searchEvent() {
  const filterVal = String(filterName.value).trim().toLowerCase()
  if (filterVal) {
    const filterRE = new RegExp(filterVal, 'gi')
    const searchProps = ['name', 'path']

    // 含父级
    function filterTreeWithParents(arr) {
      if (!arr || !Array.isArray(arr)) { return [] }

      const filterItem = (item) => {
        return searchProps.some((key) => {
          return (
            item[key] && String(item[key]).toLowerCase().includes(filterVal)
          )
        })
      }

      return arr.reduce((acc, item) => {
        if (filterItem(item)) {
          acc.push(item)
        }
        else if (item.children && Array.isArray(item.children)) {
          const filteredChildren = filterTreeWithParents(item.children)
          if (filteredChildren.length > 0) {
            item.children = filteredChildren
            acc.push(item)
          }
        }
        return acc
      }, [])
    }

    // 不含父级
    function filterTreeWithoutParents(arr) {
      if (!arr || !Array.isArray(arr)) { return [] }

      const filterItem = (item) => {
        return searchProps.some((key) => {
          return (
            item[key] && String(item[key]).toLowerCase().includes(filterVal)
          )
        })
      }

      return arr.reduce((acc, item) => {
        if (filterItem(item)) {
          // 克隆符合条件的元素，并将克隆体添加到新数组中
          acc.push(JSON.parse(JSON.stringify(item)))
        }
        else {
          if (item.children && Array.isArray(item.children)) {
            // 递归地处理子元素，并将结果合并到当前新数组中
            const filteredChildren = filterTreeWithoutParents(item.children)
            acc.push(...filteredChildren)
          }
        }

        return acc
      }, [])
    }
    const _filterFn = withParents.value
      ? filterTreeWithParents
      : filterTreeWithoutParents

    const _res = _filterFn(JSON.parse(JSON.stringify(tableData.value)))

    treeDepTraverse(_res, (item: any) => {
      searchProps.forEach((key) => {
        item[key] = String(item[key]).replace(
          filterRE,
          match => `<span class="keyword-lighten">${match}</span>`,
        )
      })
    })

    filterTableData.value = _res
  }
  else {
    filterTableData.value = tableData.value
  }
}

function treeDepTraverse(data: any, callback: any) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].children) {
      treeDepTraverse(data[i].children, callback)
    }
    callback(data[i])
  }
}
function expandAllTreeEvent() {
  const $table = tableRef.value
  if ($table) {
    $table.setAllTreeExpand(true)
  }
}
function claseExpandTreeEvent() {
  const $table = tableRef.value
  if ($table) {
    $table.clearTreeExpand()
  }
}

// 新增
function addRow() {
  formType.value = 'add'

  modalTitle.value = '菜单新增'
  formData.value = {
    parentId: '0',
    alias: 'menu',
    category: 1,
    isOpen: 1,
    showLink: 1,
    frame: false,
    sort: 1,
  }
  modalVisible.value = true
  setDetaultSort('0')
}

// 新增子项
function addChildRow(row: any) {
  formType.value = 'add'
  modalTitle.value = '菜单新增'
  formData.value = {
    parentId: row.id,
    alias: 'menu',
    category: 1,
    isOpen: 1,
    showLink: 1,
    frame: false,
    path: (row.path as string).endsWith('/index')
      ? row.path.split('/index')[0]
      : row.path, // 默认带上父级的路由
  }
  modalVisible.value = true
  setDetaultSort(row.id)
}

// 查看详情
function detailRow(row: any) {
  formType.value = 'detail'
  modalTitle.value = '菜单详情'
  modalLoading.value = true
  getMenu(row.id)
    .then((res: any) => {
      formData.value = res.data
      modalVisible.value = true
    })
    .finally(() => {
      modalLoading.value = false
    })
}

// 编辑
function editRow(row: any) {
  formType.value = 'edit'
  modalTitle.value = '菜单编辑'
  modalLoading.value = true
  getMenu(row.id)
    .then((res: any) => {
      formData.value = res.data
      modalVisible.value = true
    })
    .finally(() => {
      modalLoading.value = false
    })
}

// 删除
function deleteRow(row: any) {
  const _ids = Array.isArray(row) ? row.map(item => item.id) : [row.id]
  const _idsString = _ids.join(',')
  ElMessageBox.confirm('确定将选择数据删除?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    remove(_idsString).then((res) => {
      if (res.code === 200) {
        ElMessage({
          type: 'success',
          message: '操作成功!',
        })
        reloadPage()
      }
    })
  })
}

function batchDeletion() {
  // 获取当前选中的节点
  const _nodes = tableRef.value.getCheckboxRecords()
  if (_nodes.length === 0) {
    ElMessage.warning('请选择至少一条数据')
    return
  }
  deleteRow(_nodes)
}

// 提交 新增 | 编辑 | 新增子项
function handleSubmit(form, done) {
  if (formType.value === 'edit' || formType.value === 'add') {
    // 新增和编辑 路由不能重复

    update(form)
      .then((res: any) => {
        if (res.code === 200) {
          ElMessage({
            type: 'success',
            message: '操作成功!',
          })

          modalVisible.value = false
          reloadPage()
        }
        else {
          ElMessage({
            type: 'error',
            message: '操作失败!',
          })
        }
      })
      .finally(() => {
        done()
      })
  }
}

function reloadPage() {
  usePermissionStoreHook().clearAllCachePage()
  initRouter()
  getTableData()
}

// 获取父级节点
function findParentNode(arr, parentId) {
  const findItem = findTreeNode(arr, (item) => {
    return item.id === parentId
  })
  return findItem
}

function findTreeNode(list, callback) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].children) {
      const findItem = findTreeNode(list[i].children, callback)
      if (findItem) {
        return findItem
      }
    }
    if (callback(list[i])) {
      return list[i]
    }
  }
}

function setDetaultSort(parentId) {
  const filterAllData = [
    {
      id: '0',
      name: '顶级',
      children: tableData.value,
    },
  ]
  const parentNode = findParentNode(filterAllData, parentId)
  if (parentNode.children) {
    const lastItem = parentNode.children[parentNode.children.length - 1]
    if (lastItem) {
      formData.value.sort = (lastItem.sort || 0) + 1
    }
    else {
      formData.value.sort = 1
    }
  }
  else {
    formData.value.sort = 1
  }
}

onMounted(() => {
  getTableData()
})

//
const modalVisible = ref(false)
const modalLoading = ref(false)
const modalTitle = ref('新增')
//

const formType: Ref<'add' | 'detail' | 'edit'> = ref('add')
const formRef: any = ref()
const formData: any = ref({})
const formOption: any = ref({
  detail: computed(() => formType.value === 'detail'),
  column: [
    {
      label: '上级菜单',
      prop: 'parentId',
      type: 'tree',
      span: 12,
      dicUrl: '/cupSystemApi/menu/tree',
      dicFormatter(res) {
        return [
          {
            id: '0',
            key: '0',
            title: '顶级菜单',
            children: res?.data,
          },
        ]
      },
      checkStrictly: true,
      props: {
        label: 'title',
        value: 'id',
      },
      rules: [
        {
          required: false,
          message: '请选择上级菜单',
          trigger: 'click',
        },
      ],
    },
    {
      label: '菜单名称',
      prop: 'name',
      span: 12,
      rules: [
        {
          required: true,
          message: '请输入菜单名称',
          trigger: 'blur',
        },
      ],
    },
    {
      label: '路由地址',
      prop: 'path',
      span: 24,
      rules: [
        {
          required: true,
          message: '请输入路由地址',
          trigger: 'blur',
        },
        {
          validator: (rule: any, value: any, callback: any) => {
            if (value.includes(' ')) { callback(new Error('路由地址不能包含空格')) }
            else { callback() }
          },
          trigger: 'blur',
          required: true,
        },
      ],
    },

    {
      label: '菜单编号',
      prop: 'code',
      span: 12,
      rules: [
        {
          required: true,
          message: '请输入菜单编号',
          trigger: 'blur',
        },
      ],
    },
    {
      label: '菜单类型',
      prop: 'category',
      type: 'radio',
      span: 12,
      dicData: [
        {
          label: '菜单',
          value: 1,
        },
        {
          label: '按钮',
          value: 2,
        },
      ],
      rules: [
        {
          required: true,
          message: '请选择菜单类型',
          trigger: 'blur',
        },
      ],
    },
    {
      label: '菜单别名',
      prop: 'alias',
      span: 12,
      rules: [
        {
          required: true,
          message: '请输入菜单别名',
          trigger: 'blur',
        },
      ],
    },
    {
      label: '菜单排序',
      prop: 'sort',
      type: 'number',
      min: 1,
      max: 9999,
      span: 12,
      rules: [
        {
          required: true,
          message: '请输入菜单排序',
          trigger: 'blur',
        },
      ],
    },
    {
      label: '显示菜单',
      prop: 'showLink',
      type: 'radio',
      span: 12,
      value: 1,
      dicData: [
        {
          label: '否',
          value: 0,
        },
        {
          label: '是',
          value: 1,
        },
      ],
    },
    {
      label: '菜单备注',
      prop: 'remark',
      type: 'textarea',
      span: 24,
      minRows: 6,
    },
  ],
})
</script>

<template>
  <div
    style="
      flex-direction: column;
      gap: 10px;
      padding: 32px;
      overflow: hidden;
      background: #fff;
"
  >
    <div class="searchTool">
      <el-form label-suffix="：" style="width: 100%;">
        <div style="display: flex; gap: 20px;">
          <el-form-item label="关键字">
            <el-input
              v-model="filterName"
              type="search"
              placeholder="请输入 菜单名称 或 路由地址"
              clearable
              style="width: 280px;"
              @input="searchEvent"
            />
          </el-form-item>
          <el-form-item label="过滤结果">
            <el-checkbox v-model="withParents" @change="searchEvent">
              保留父级
            </el-checkbox>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <div style="margin-bottom: 18px;">
      <el-button
        v-if="permissionList.addBtn"
        icon="el-icon-plus"
        type="primary"
        @click="addRow"
      >
        新 增
      </el-button>
      <el-button
        v-if="permissionList.delBtn"
        icon="el-icon-delete"
        type="danger"
        plain
        @click="batchDeletion"
      >
        批量删除
      </el-button>
      <el-button @click="expandAllTreeEvent">
        展开所有树
      </el-button>
      <el-button @click="claseExpandTreeEvent">
        关闭所有树
      </el-button>
    </div>
    <div>
      <vxe-table
        ref="tableRef"
        :column-config="{ resizable: true, useKey: true }"
        :row-config="{ useKey: true }"
        :tree-config="{}"
        :expand-config="{ reserve: true }"
        :show-overflow="true"
        :data="filterTableData"
        :checkbox-config="{
          labelField: 'name',
          checkStrictly: true,
        }"
      >
        <vxe-column
          type="checkbox"
          field="name"
          title="菜单名称"
          :resizable="false"
          min-width="250"
          tree-node
        >
          <template #default="{ row }">
            <span v-html="row.name" />
          </template>
        </vxe-column>
        <vxe-column
          type="html"
          :resizable="false"
          field="path"
          min-width="80"
          title="路由地址"
        />
        <vxe-column
          type="html"
          :resizable="false"
          field="code"
          min-width="80"
          title="菜单编号"
        />
        <vxe-column
          type="html"
          :resizable="false"
          field="alias"
          min-width="80"
          title="菜单别名"
        />
        <vxe-column
          :resizable="false"
          field="sort"
          title="菜单排序"
          width="100"
          align="center"
        />
        <vxe-column
          title="操作"
          header-align="center"
          width="220"
          :resizable="false"
        >
          <template #default="{ row }">
            <div style="display: flex; gap: 10px;">
              <el-link
                v-if="permissionList.addBtn"
                :underline="false"
                type="primary"
                @click="detailRow(row)"
              >
                查看
              </el-link>
              <el-link
                v-if="permissionList.editBtn"
                :underline="false"
                type="primary"
                @click="editRow(row)"
              >
                编辑
              </el-link>
              <el-link
                v-if="permissionList.delBtn"
                :underline="false"
                type="danger"
                @click="deleteRow(row)"
              >
                删除
              </el-link>
              <el-link
                v-if="permissionList.addBtn"
                :underline="false"
                type="primary"
                @click="addChildRow(row)"
              >
                添加子项
              </el-link>
            </div>
          </template>
        </vxe-column>
      </vxe-table>
    </div>
    <vxe-modal
      v-model="modalVisible"
      :title="modalTitle"
      width="800px"
      :destroy-on-close="true"
      esc-closable
    >
      <avue-form
        v-if="modalVisible"
        ref="formRef"
        v-model="formData"
        v-loading="modalLoading"
        style="padding: 20px;"
        :option="formOption"
        @submit="handleSubmit"
      >
        <template #source="scoped">
          <span style="display: inline-block;">
            <SelectIcon v-model="formData.source" :disabled="scoped.disabled" />
          </span>
        </template>
      </avue-form>
    </vxe-modal>
  </div>
</template>

<style lang="scss" scoped>
:deep(.vxe-table--body-wrapper) {
  .keyword-lighten {
    color: #000;
    background-color: #ff0;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(0 0 0 / 40%);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(0 0 0 / 50%);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
}

.searchTool {
  display: flex;
  gap: 10px;
  width: 100%;
}

:deep(.vxe-table) {
  .vxe-table--border-line {
    border: none;
  }

  .vxe-table--header-wrapper.body--wrapper {
    background: #fafafa;
  }
}
</style>
