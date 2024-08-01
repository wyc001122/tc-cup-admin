<script setup lang='ts'>
import {
  tenant_list,
  tenant_detail,
  tenant_submit,
  tenant_remove,
} from '@/api/modules/cup-system/tenant'
import { menu_list } from '@/api/modules/cup-system/menu'
import { package_list, package_configTenantPackage } from '@/api/modules/cup-system/package'

// 弹窗组件
import EditForm from './components/DialogForm/EditForm.vue'
import SettingForm from './components/DialogForm/SettingForm.vue'
import ViewForm from './components/DialogForm/ViewForm.vue'

const tableRef = ref()

const {
  indexFn,
  listData,
  loading,
  currentPage,
  pageSize,
  pageTotal,
  searchForm,
  refresh,
  deleteRow,
  searchHandler,
  resetHandler,
} = useCRUD({
  refreshApi: tenant_list,
  addApi: tenant_submit,
  deleteApi: tenant_remove,
  detailApi: tenant_detail,
  updateApi: tenant_submit,
})

/** 批量删除  */
function batchDelHandler() {
  const _nodes = tableRef.value?.getSelectionRows()
  if (_nodes && _nodes.length === 0) {
    ElMessage.warning('请选择要删除的数据！')
  }
  else {
    deleteRow(_nodes)
  }
}

const dialogInfo = ref({
  visible: false,
  title: '',
  type: '',
  data: {},
})

function opendAdd() {
  dialogInfo.value = {
    visible: true,
    title: '新增租户',
    type: 'add',
    /** 新增默认值 */
    data: {},
  }
}

function openEdit(row: any) {
  tenant_detail({ tenantId: row.tenantId }).then((res) => {
    if (res.code === 200) {
      dialogInfo.value = {
        visible: true,
        title: '编辑租户',
        type: 'edit',
        data: res.data ?? {},
      }
    }
  })
}

function openDetail(row: any) {
  tenant_detail({ tenantId: row.tenantId }).then((res) => {
    if (res.code === 200) {
      dialogInfo.value = {
        visible: true,
        title: '查看租户',
        type: 'view',
        data: res.data ?? {},
      }
    }
  })
}

function submitEdit(data: any) {
  tenant_submit(data).then((res) => {
    if (res.code === 200) {
      dialogInfo.value.visible = false
      ElMessage.success('操作成功')
      refresh()
    }
  })
}

function submitSetting({ menus, tenantId }: any) {
  const _params = { menus }
  const _other = { params: { tenantId } }
  package_configTenantPackage(_params, _other).then((res) => {
    if (res.code === 200) {
      dialogInfo.value.visible = false
      ElMessage.success('操作成功')
      refresh()
    }
  })
}

function menuSetting(row: any) {
  const _params = { tenantId: row.tenantId, menuLevel: 1 }
  menu_list(_params).then((res) => {
    if (res.code === 200) {
      dialogInfo.value = {
        visible: true,
        title: '产品配置',
        type: 'setting',
        data: {
          ...row,
          menuList: res.data,
        },
      }
    }
  })
}

/** 分页器 */
// const layout = ref('total, sizes, prev, pager, next, jumper')
// const pagerCount = ref(7)
// const paginationWrapper = ref()
// const { width } = useElementSize(paginationWrapper)

// watch(width, (value) => {
//   pagerCount.value = 7
//   layout.value = 'total, sizes, prev, pager, next, jumper'
//   if (value <= 740) {
//     layout.value = 'total, prev, pager, next, jumper'
//   }
//   if (value <= 600) {
//     layout.value = 'total, prev, pager, next'
//     const lessThan560 = 600 - value
//     const pageBtnSize = 32
//     const lessBtnCount = lessThan560 / pageBtnSize
//     pagerCount.value = Math.max(7 - Math.floor(lessBtnCount), 2)
//   }
//   if (value <= 310) {
//     layout.value = 'prev, pager, next'
//   }
// })

/** 其他数据获取 */
const allMenuList = ref<any[]>([])
provide('allMenuList', allMenuList)
function getMenuList() {
  menu_list({ menuLevel: 1 }).then((res) => {
    if (res.code === 200) {
      allMenuList.value = res.data
    }
  })
}

const packageList = ref<any>([])
provide('packageList', packageList)
function getPackageList() {
  package_list({ current: 1, size: 9999 }).then((res) => {
    if (res.code === 200) {
      packageList.value = res.data?.records ?? []
    }
  })
}

onMounted(() => {
  refresh()
  refresh()

  getMenuList()
  getPackageList()
})
</script>

<template>
  <TablePage>
    <template #search>
      <el-form :model="searchForm" label-suffix="：" label-width="84px" @keyup.enter="searchHandler">
        <row-col :gutter="20" :span="6">
          <el-form-item label="租户ID">
            <el-input v-model="searchForm.tenantId" placeholder="请输入租户ID" clearable />
          </el-form-item>
          <el-form-item label="租户名称">
            <el-input v-model="searchForm.tenantName" placeholder="请输入租户名称" clearable />
          </el-form-item>
          <el-form-item label="系统名称">
            <el-input v-model="searchForm.systemName" placeholder="请输入系统名称" clearable />
          </el-form-item>
          <el-form-item label-width="0">
            <el-button type="primary" @click="searchHandler">
              搜索
            </el-button>
            <el-button @click="resetHandler">
              重置
            </el-button>
          </el-form-item>
        </row-col>
      </el-form>
    </template>
    <template #tool>
      <el-button type="primary" @click="opendAdd">
        新增
      </el-button>
      <el-button type="danger" @click="batchDelHandler">
        批量删除
      </el-button>
    </template>
    <el-table
      ref="tableRef"
      v-loading="loading"
      row-key="id"
      :data="listData"
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
      <el-table-column prop="tenantId" label="租户ID" width="80px" align="center" />
      <el-table-column prop="tenantName" label="租户名称" min-width="150px" />
      <el-table-column prop="systemName" label="系统名称" />
      <el-table-column prop="domain" label="绑定域名" />
      <el-table-column prop="systemName" label="系统Logo" width="100px" align="center">
        <template #default="{ row }">
          <el-image
            v-if="row.systemLogo"
            :preview-src-list="[row.systemLogo]"
            :src="row.systemLogo"
            :preview-teleported="true"
            class="aspect-[52/60] w-[30px] shrink-0 vertical-bottom"
            fit="contain"
          />
          <el-avatar v-else :size="30" class="vertical-bottom">
            无
          </el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="accountNumber" label="账号额度" width="100px" align="center">
        <template #default="{ row }">
          {{ row.accountNumber === -1 ? '不限制' : row.accountNumber }}
        </template>
      </el-table-column>
      <el-table-column prop="expireTime" label="过期时间" width="100px" align="center">
        <template #default="{ row }">
          {{ row.expireTime > 0 ? row.expireTime : '不限制' }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220" align="center">
        <template #default="{ row }">
          <DividerSpace>
            <el-link :underline="false" type="primary" @click="openDetail(row)">
              查看
            </el-link>
            <el-link :underline="false" type="primary" @click="openEdit(row)">
              编辑
            </el-link>
            <el-link :underline="false" type="primary" @click="menuSetting(row)">
              产品配置
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
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="pageTotal"
        :background="true"
        @current-change="() => refresh"
      />
    </div>

    <EditForm
      v-if="dialogInfo.visible && (dialogInfo.type === 'add' || dialogInfo.type === 'edit')"
      v-model="dialogInfo.visible"
      :title="dialogInfo.title"
      :data="dialogInfo.data"
      :type="dialogInfo.type"
      @submit="submitEdit"
    />

    <SettingForm
      v-else-if="dialogInfo.type === 'setting'"
      v-model="dialogInfo.visible"
      :title="dialogInfo.title"
      :data="dialogInfo.data"
      :type="dialogInfo.type"
      @submit="submitSetting"
    />

    <ViewForm
      v-else-if="dialogInfo.type === 'view'"
      :model-value="dialogInfo.visible"
      :title="dialogInfo.title"
      :data="dialogInfo.data"
    />
  </TablePage>
</template>

<style scoped lang='scss'></style>
