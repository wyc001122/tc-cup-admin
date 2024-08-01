<script setup lang='ts'>
import { useElementSize } from '@vueuse/core'
import { info, list, submit, update, remove, reset_password } from '@/api/modules/cup-user/index'
import { tenant_select } from '@/api/modules/cup-system/tenant'
import { role_tree } from '@/api/modules/cup-system/role'
import { dept_tree } from '@/api/modules/cup-system/dept'
import { post_select } from '@/api/modules/cup-system/post'
// 弹窗组件
import AddForm from './components/DialogForm/AddForm.vue'
import EditForm from './components/DialogForm/EditForm.vue'
import ViewForm from './components/DialogForm/ViewForm.vue'

const searchForm = ref<any>({})
const tableData = ref<any>([])
const loading = ref(false)
const current = ref(1)
const size = ref(10)
const total = ref(0)

function getTableData() {
  loading.value = true
  const _params = {
    ...searchForm.value,
    current: current.value,
    size: size.value,
  }

  list(_params).then((res) => {
    if (res.code === 200) {
      tableData.value = res.data.records
      total.value = res.data.total
      loading.value = false
      fixCurrent(res.data.pages)
    }
  })
    .catch(() => {
      tableData.value = []
      loading.value = false
    })
}

function fixCurrent(pages: number) {
  if (pages > 0 && current.value > pages) {
    current.value = pages
    getTableData()
  }
}

function search() {
  current.value === 1
  getTableData()
}

function reset() {
  searchForm.value = {}
  current.value = 1
  getTableData()
}

const dialogInfo = ref({
  visible: false,
  title: '',
  type: '',
  data: {},
})

function addRow() {
  dialogInfo.value = {
    visible: true,
    title: '新增用户',
    type: 'add',
    data: {},
  }
}

function editRow(row: any) {
  info({ id: row.id }).then((res) => {
    if (res.code === 200) {
      const _data: any = res.data
      _data.roleId && (_data.roleId = _data.roleId.split(','))
      _data.deptId && (_data.deptId = _data.deptId.split(','))
      _data.postId && (_data.postId = _data.postId.split(','))
      dialogInfo.value = {
        visible: true,
        title: '编辑用户',
        type: 'edit',
        data: _data ?? {},
      }
    }
  })
}

function viewRow(row: any) {
  info({ id: row.id }).then((res) => {
    if (res.code === 200) {
      dialogInfo.value = {
        visible: true,
        title: '查看用户',
        type: 'view',
        data: res.data ?? {},
      }
    }
  })
}

const tableRef = ref()
function batchDelHandler() {
  const _nodes = tableRef.value?.getSelectionRows()
  if (_nodes && _nodes.length === 0) {
    ElMessage.warning('请选择要删除的用户！')
  }
  else {
    deleteRow(_nodes)
  }
}

function deleteRow(rows: any) {
  rows = Array.isArray(rows) ? rows : [rows]
  const _ids = rows.map((item: any) => item.id)
  const _idsString = _ids.join(',')
  ElMessageBox.confirm(rows.length > 1 ? `确定将选择的${rows.length}个用户删除?` : '确定将选择的用户删除?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    remove({}, {
      params: {
        ids: _idsString,
      },
    }).then((res) => {
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

function resetPassword() {
  const _nodes = tableRef.value?.getSelectionRows()
  if (_nodes && _nodes.length === 0) {
    ElMessage.warning('请选择要重置密码的用户！')
  }
  else {
    resetPasswordHandler(_nodes)
  }
}
function resetPasswordHandler(rows: any) {
  rows = Array.isArray(rows) ? rows : [rows]
  const _ids = rows.map((item: any) => item.id)
  const _idsString = _ids.join(',')
  ElMessageBox.confirm(rows.length > 1 ? `确定将选择的${rows.length}个用户重置密码？` : '确定将选择的用户重置密码？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    reset_password({}, {
      params: {
        userIds: _idsString,
      },
    }).then((res) => {
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

function submitAdd(formData: any) {
  submit(formData).then((res) => {
    if (res.code === 200) {
      dialogInfo.value.visible = false
      ElMessage.success('操作成功')
      getTableData()
    }
  })
}
function submitEdit(formData: any) {
  update(formData).then((res) => {
    if (res.code === 200) {
      dialogInfo.value.visible = false
      ElMessage.success('操作成功')
      getTableData()
    }
  })
}

function indexFn(index: number) {
  return (current.value - 1) * size.value + index + 1
}

const layout = ref('total, sizes, prev, pager, next, jumper')
const pagerCount = ref(7)
const paginationWrapper = ref()
const { width } = useElementSize(paginationWrapper)
watch(width, (value) => {
  pagerCount.value = 7
  layout.value = 'total, sizes, prev, pager, next, jumper'
  if (value <= 740) {
    layout.value = 'total, prev, pager, next, jumper'
  }
  if (value <= 600) {
    layout.value = 'total, prev, pager, next'
    const lessThan560 = 600 - value
    const pageBtnSize = 32
    const lessBtnCount = lessThan560 / pageBtnSize
    pagerCount.value = ~~Math.max(7 - lessBtnCount, 2)
  }
  if (value <= 310) {
    layout.value = 'prev, pager, next'
  }
})

const tenantList = ref<any>([])
const roleList = ref<any>([])
const departmentList = ref<any>([])
const postList = ref<any>([])
provide('tenantList', tenantList)
provide('roleList', roleList)
provide('departmentList', departmentList)
provide('postList', postList)

function getTenantList() {
  tenant_select({}).then((res) => {
    if (res.code === 200) {
      tenantList.value = res.data
    }
  })
}

function getRoleList() {
  role_tree({}).then((res) => {
    if (res.code === 200) {
      roleList.value = res.data
    }
  })
}

function getDepartmentList() {
  dept_tree({}).then((res) => {
    if (res.code === 200) {
      departmentList.value = res.data
    }
  })
}

function getPostList() {
  post_select({}).then((res) => {
    if (res.code === 200) {
      postList.value = res.data
    }
  })
}

onMounted(() => {
  getTableData()

  getTenantList()
  getRoleList()
  getDepartmentList()
  getPostList()
})
</script>

<template>
  <TablePage>
    <template #search>
      <el-form :model="searchForm" label-suffix="：" label-width="84px" @keyup.enter="search">
        <row-col :gutter="20" :span="6">
          <el-form-item label="登录账号">
            <el-input v-model="searchForm.account" placeholder="请输入登录账号" clearable />
          </el-form-item>
          <el-form-item label="用户姓名">
            <el-input v-model="searchForm.realName" placeholder="请输入用户姓名" clearable />
          </el-form-item>
          <el-form-item label="所属租户">
            <el-select v-model="searchForm.tenantId" placeholder="请选择所属租户" clearable filterable>
              <el-option v-for="item in tenantList" :key="item.tenantId" :label="item.tenantName" :value="item.tenantId" />
            </el-select>
          </el-form-item>
          <el-form-item label="所属角色">
            <el-select v-model="searchForm.roleId" placeholder="请选择所属角色" clearable filterable>
              <el-option v-for="item in roleList" :key="item.id" :label="item.title" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item label="所属部门">
            <el-tree-select
              v-model="searchForm.deptId"
              :data="departmentList"
              :props="{
                value: 'id',
                label: 'title',
              }"
              check-strictly
              placeholder="请选择所属角色"
              clearable
              filterable
            />
          </el-form-item>
          <el-form-item label="所属岗位">
            <el-select v-model="searchForm.postId" placeholder="请选择所属岗位" clearable filterable>
              <el-option v-for="item in postList" :key="item.id" :label="item.postName" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item label-width="0">
            <el-button type="primary" @click="search">
              搜索
            </el-button>
            <el-button @click="reset">
              重置
            </el-button>
          </el-form-item>
        </row-col>
      </el-form>
    </template>
    <template #tool>
      <el-button type="primary" @click="addRow">
        新增
      </el-button>
      <el-button type="danger" @click="batchDelHandler">
        批量删除
      </el-button>
      <el-button type="primary" plain @click="resetPassword">
        重置密码
      </el-button>
    </template>
    <el-table
      ref="tableRef"
      v-loading="loading"
      row-key="id"
      :data="tableData"
      style="width: 100%;"
      :show-overflow-tooltip="true"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column
        type="index"
        :index="indexFn"
        label="序号"
        width="60"
        align="center"
      />
      <el-table-column prop="account" label="登录账号" />
      <el-table-column prop="realName" label="用户姓名" />
      <el-table-column prop="tenantName" label="所属租户" />
      <el-table-column prop="roleName" label="所属角色" />
      <el-table-column prop="deptName" label="所属部门" />
      <el-table-column prop="postName" label="所属岗位" />
      <el-table-column label="操作" width="150" align="center">
        <template #default="{ row }">
          <DividerSpace>
            <el-link :underline="false" type="primary" @click="viewRow(row)">
              查看
            </el-link>
            <el-link :underline="false" type="primary" @click="editRow(row)">
              编辑
            </el-link>
            <el-link :underline="false" type="info" @click="deleteRow(row)">
              删除
            </el-link>
          </DividerSpace>
        </template>
      </el-table-column>
    </el-table>

    <div ref="paginationWrapper" class="flex justify-end p-t-[16px]">
      <el-pagination
        v-model:current-page="current"
        v-model:page-size="size"
        :page-sizes="[10, 20, 30, 40, 50, 100]"
        :pager-count="pagerCount"
        :background="true"
        :layout="layout"
        :total="total"
        @current-change="getTableData()"
      />
    </div>

    <AddForm
      v-if="dialogInfo.type === 'add'"
      v-model="dialogInfo.visible"
      :title="dialogInfo.title"
      :data="dialogInfo.data"
      @submit="submitAdd"
    />
    <EditForm
      v-else-if="dialogInfo.type === 'edit'"
      v-model="dialogInfo.visible"
      :title="dialogInfo.title"
      :data="dialogInfo.data"
      @submit="submitEdit"
    />
    <ViewForm
      v-else-if="dialogInfo.type === 'view'"
      v-model="dialogInfo.visible"
      :title="dialogInfo.title"
      :data="dialogInfo.data"
    />
  </TablePage>
</template>

<style scoped lang='scss'></style>
