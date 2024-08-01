<script setup lang='ts'>
import { render } from 'vue'
/** ==================== 搜索 ======================= */

const searchFormRef = ref()
const searchForm = ref<any>({})

function searchHandler() {
  // ...

  // 调搜索接口
}

function resetHandler() {
  // ...

  // 重置查询条件
}

/** ==================== 表格 ======================= */

const loading = ref(false)
const listData = ref<any>([])
function indexFn(index: number) {}
</script>

<template>
  <TablePage>
    <template #search>
      <SearchForm
        ref="searchFormRef"
        :model="searchForm"
        label-suffix="："
        label-width="84px"
        @keyup.enter="searchHandler"
      >
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
      </SearchForm>
    </template>
    <template #tool>
      <el-button type="primary">
        新增
      </el-button>
      <el-button type="danger">
        批量删除
      </el-button>
    </template>
    <el-table
      ref="tableRef"
      v-loading="loading"
      :data="listData"
      :show-overflow-tooltip="true"
      row-key="id"
      class="w-full"
    >
      <el-table-column type="selection" width="55" />
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
            <el-link :underline="false" type="primary">
              查看
            </el-link>
            <el-link :underline="false" type="primary">
              编辑
            </el-link>
            <el-link :underline="false" type="primary">
              产品配置
            </el-link>
            <el-link :underline="false" type="info">
              删除
            </el-link>
          </DividerSpace>
        </template>
      </el-table-column>
    </el-table>
  </TablePage>
</template>

<style scoped lang='scss'>
</style>
