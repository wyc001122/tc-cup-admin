<script setup lang='ts'>
import {
  menu_detail,
  menu_list,
  menu_submit,
  menu_remove,
} from '@/api/modules/cup-sys/menu'
import { useClipboard } from '@vueuse/core'
import { Plus, Delete } from '@element-plus/icons-vue'
import { useVxeExpand, useFilterData, useCRUD } from './composition'
import type { VxeTableInstance } from 'vxe-table'

/** 复制 */
const { copy, copied } = useClipboard()

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

/** 表格展开 逻辑 */
const tableRef = ref<VxeTableInstance>()
const {
  expandAllTree,
  claseExpandTree,
} = useVxeExpand(tableRef)

/** 获取数据 逻辑 */
const {
  tableData,
  getTableData,
  formData,
  formRef,
  formRules,
  dialogInfo,
  openDialog,
  deleteRow,
} = useCRUD()

/** 数据过滤 逻辑 */
const {
  filterTableData,
  searchForm,
  searchEvent,
} = useFilterData()

watch([tableData, searchForm], () => {
  searchEvent(tableData)
}, {
  deep: true,
})

function batchDeletion() {
  if (tableRef.value) {
    const _nodes = tableRef.value.getCheckboxRecords()
    if (_nodes.length === 0) {
      ElMessage.warning('请选择要删除的数据！')
      return
    }
    const ids = _nodes.map((item: any) => item.id)
    deleteRow(ids)
  }
}

/** 运行入口 */
onMounted(() => {
  getTableData()
})
</script>

<template>
  <ele-page :flex-table="true">
    <ele-card :body-style="{ paddingBottom: '2px' }">
      <el-form :model="searchForm" label-suffix="：" label-width="100px">
        <el-row :gutter="20">
          <el-col :lg="6" :md="12" :sm="12" :xs="24">
            <el-form-item label="关键字" prop="keywords">
              <el-input v-model="searchForm.keywords" placeholder="请输入 菜单名称 或 路由地址" clearable />
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="12" :sm="12" :xs="24">
            <el-form-item label="过滤结果" prop="keywords">
              <el-checkbox v-model="searchForm.withParents">
                保留父级
              </el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </ele-card>

    <ele-card :flex-table="true">
      <ele-page :plain="true" class="m-b-[20px]">
        <el-button v-if="permissionList.addBtn" :icon="Plus" type="primary" @click="openDialog('add')">
          新增
        </el-button>
        <el-button v-if="permissionList.delBtn" :icon="Delete" type="danger" @click="batchDeletion">
          批量删除
        </el-button>
        <el-button @click="expandAllTree">
          展开全部
        </el-button>
        <el-button @click="claseExpandTree">
          收起全部
        </el-button>
      </ele-page>
      <ele-page :flex-table="true" :plain="true">
        <vxe-table
          ref="tableRef"
          height="auto"
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
            title="节点名称"
            :resizable="false"
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
            title="权限标识"
          />
          <vxe-column
            :resizable="false"
            field="sort"
            title="排序"
            width="100"
            align="center"
          />
          <vxe-column title="操作" header-align="center" width="220" :resizable="false" />
        </vxe-table>
      </ele-page>
    </ele-card>

    <ele-modal v-model="dialogInfo.visible" form :title="dialogInfo.title" width="500px">
      <el-form
        ref="formRef"
        label-width="78px"
        :model="formData"
        :rules="formRules"
        :validate-on-rule-change="false"
      >
        <el-form-item label="节点类型" prop="category">
          <el-radio-group v-model="formData.category">
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
        <el-form-item v-if="formData.category !== 2" v-motion-fade label="节点路径" prop="path">
          <el-input v-model="formData.path" placeholder="请输入节点路径" />
        </el-form-item>
        <el-form-item v-if="formData.category === 2" v-motion-fade label="权限标识" prop="code">
          <el-input v-model="formData.code" placeholder="请输入权限标识" />
        </el-form-item>
        <el-form-item v-if="formData.category !== 2" v-motion-fade label="节点图标" prop="source">
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
        <el-row v-if="formData.category !== 2" v-motion-fade>
          <el-col :span="12">
            <el-form-item label="显示节点" prop="showLink">
              <el-radio-group v-model="formData.showLink">
                <el-radio-button :label="true">
                  是
                </el-radio-button>
                <el-radio-button :label="false">
                  否
                </el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="外部链接" prop="isOpen">
              <el-radio-group v-model="formData.isOpen">
                <el-radio-button :label="1">
                  是
                </el-radio-button>
                <el-radio-button :label="0">
                  否
                </el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item v-if="formData.category !== 2" v-motion-fade label="节点排序" prop="sort">
          <el-input-number v-model="formData.sort" :min="0" placeholder="请输入排序" />
        </el-form-item>
      </el-form>
    </ele-modal>
  </ele-page>
</template>

<style scoped lang='scss'>
:deep(.keyword-lighten) {
  color: #000;
  background-color: #ff0;
}
</style>
