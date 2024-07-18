import {
  menu_detail,
  menu_list,
  menu_submit,
  menu_remove,
} from '@/api/modules/cup-sys/menu'
import type { MenuVO对象 } from '@/api/modules/cup-sys/_model'
import type { MaybeRef } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { VxeTableInstance } from 'vxe-table'

export function useVxeExpand(tableRef: Ref<VxeTableInstance | undefined>) {
  function expandAllTree() {
    const tableInstance = tableRef.value
    if (tableInstance) {
      tableInstance.setAllTreeExpand(true)
    }
  }
  function claseExpandTree() {
    const tableInstance = tableRef.value
    if (tableInstance) {
      tableInstance.clearTreeExpand()
    }
  }
  return {
    /** 展开全部 */
    expandAllTree,
    /** 收起全部 */
    claseExpandTree,
  }
}

export function useCRUD() {
  const tableData = ref<MenuVO对象[]>([])
  function getTableData() {
    return menu_list().then((res) => {
      tableData.value = res.data
    })
  }

  const formRef = ref<FormInstance>()
  const formData = ref<MenuVO对象>({})
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
        required: computed(() => formData.value.category === 2) as any,
        message: '请输入权限标识',
        trigger: 'blur',
      },
    ],
  })
  const dialogInfo = ref<DialogInfo>({
    visible: false,
  })

  const _title = {
    add: '新增节点',
    edit: '编辑节点',
    detail: '查看节点',
  }
  const _default = {
    category: 1, // 默认为 页面
    showLink: true, // 默认为 显示
    isOpen: 0, // 默认为 不是外部链接
  }
  // 根据父级id，获取父级节点下下一个序号
  function getNextSortByParentId(parentId: string) {
    const topMenu = [
      {
        id: '0',
        name: '顶级',
        children: unref(tableData),
      },
    ]
    const parentNode = findParentNode(topMenu, parentId)
    if (parentNode.children) {
      const lastItem = parentNode.children[parentNode.children.length - 1]
      if (lastItem) {
        return (lastItem.sort || 0) + 1
      }
      else {
        return 1
      }
    }
    else {
      return 1
    }
  }

  function openDialog(type: DialogInfoType, row?: MenuVO对象) {
    if (type === 'add') {
      dialogInfo.value = {
        type,
        title: _title[type],
        visible: true,
      }
      formData.value = {
        ..._default,
        sort: getNextSortByParentId('0'),
      }
    }
    else {
      menu_detail({
        id: row?.id,
      }).then((res) => {
        dialogInfo.value = {
          type,
          title: _title[type],
          visible: true,
        }
      })
    }
  }

  function addRow(data: MenuVO对象) {
    menu_submit(data).then((res) => {
      if (res.code === 200) {
        ElMessage({
          type: 'success',
          message: '操作成功!',
        })
        getTableData()
      }
    })
  }

  function editRow(row: MenuVO对象) {
    openDialog('edit', row)
  }

  function deleteRow(ids: string[]) {
    ElMessageBox.confirm('确定将选择数据删除?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {
      menu_remove(ids).then((res) => {
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

  return {
    /** 获取的数据  */
    tableData,
    /** 获取数据的方法 */
    getTableData,
    /** 表单数据  */
    formData,
    /** 表单实例  */
    formRef,
    /** 表单校验规则 */
    formRules,
    /** 弹窗信息 */
    dialogInfo,
    /** 打开弹窗 */
    openDialog,
    /** 新增 */
    addRow,
    /** 删除 */
    deleteRow,
  }
}

// 获取父级节点
function findParentNode(list: any[], parentId: string) {
  const findItem = findTreeNode(list, (item: any) => {
    return item.id === parentId
  })
  return findItem
}
function findTreeNode(list: any[], callback: Function) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].children) {
      const findItem = findTreeNode(list[i].children, callback) as any
      if (findItem) {
        return findItem
      }
    }
    if (callback(list[i])) {
      return list[i]
    }
  }
}

type DialogInfoType = 'add' | 'edit' | 'detail'

interface DialogInfo {
  type?: 'add' | 'edit' | 'detail'
  title?: string
  visible: boolean
}

interface SearchForm {
  keywords?: string
  withParents?: boolean
}
export function useFilterData(searchForm: Ref<SearchForm>) {
  /** 搜索方法 */
  function filterHandler(rowTableData: MaybeRef<MenuVO对象[]>) {
    let filterVal = searchForm.value.keywords || ''
    filterVal = String(filterVal).trim().toLowerCase()
    if (filterVal) {
      const filterRE = new RegExp(filterVal, 'gi')
      const searchProps = ['name', 'path']

      // 含父级
      function filterTreeWithParents(arr: any) {
        if (!arr || !Array.isArray(arr)) {
          return []
        }

        const filterItem = (item: any) => {
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
      function filterTreeWithoutParents(arr: any) {
        if (!arr || !Array.isArray(arr)) {
          return []
        }

        const filterItem = (item: any) => {
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
      const _filterFn = searchForm.value.withParents
        ? filterTreeWithParents
        : filterTreeWithoutParents

      const _res = _filterFn(JSON.parse(JSON.stringify(unref(rowTableData))))

      treeDepTraverse(_res, (item: any) => {
        searchProps.forEach((key) => {
          item[key] = String(item[key]).replace(
            filterRE,
            match => `<span class="keyword-lighten">${match}</span>`,
          )
        })
      })

      return _res
    }
    else {
      console.log('%c Line:311 🥑 rowTableData', 'color:#465975', rowTableData)
      return unref(rowTableData)
    }
  }

  /** 递归遍历(深度优先) */
  function treeDepTraverse(data: any, callback: any) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].children) {
        treeDepTraverse(data[i].children, callback)
      }
      callback(data[i])
    }
  }

  return filterHandler
}
