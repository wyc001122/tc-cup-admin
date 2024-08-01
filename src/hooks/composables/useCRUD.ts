import { ElMessageBox } from 'element-plus'

interface BaseConfig {
  /** 列表api */
  refreshApi?: (params?: any, other?: any) => Promise<any>
  /** 新增api */
  addApi?: (params?: any, other?: any) => Promise<any>
  /** 删除api */
  deleteApi?: (params?: any, other?: any) => Promise<any>
  /** 修改api */
  updateApi?: (params?: any, other?: any) => Promise<any>
  /** 获取详情api */
  detailApi?: (params?: any, other?: any) => Promise<any>
}

/** 请求钩子(前置、后置) */
type BeforeHooksFunc = (params?: any, other?: any, rows?: any) => Promise<any> | any
type AfterHooksFunc = (res: any) => any
interface OtherHooks {
  /** 列表api——请求前 */
  beforeRefresh?: (params?: any, other?: any) => Promise<any> | any
  /** 列表api——请求后 */
  afterRefresh?: AfterHooksFunc

  /** 新增api——请求前 */
  beforeAdd?: BeforeHooksFunc
  /** 新增api——请求后 */
  afterAdd?: AfterHooksFunc

  /** 删除api——请求前 */
  beforeDelete?: BeforeHooksFunc
  /** 删除api——请求后 */
  afterDelete?: AfterHooksFunc

  /** 修改api——请求前 */
  beforeUpdate?: BeforeHooksFunc
  /** 修改api——请求后 */
  afterUpdate?: AfterHooksFunc

  /** 获取详情api——请求前 */
  beforeDetail?: BeforeHooksFunc
  /** 获取详情api——请求后 */
  afterDetail?: AfterHooksFunc

  addDialog?: any
  editDialog?: any
  viewDialog?: any
}

/** 其他参数 */
interface OtherConfig {
  /** 默认查询参数(首次查询、重置查询 会用到) */
  defaultParams?: any
}

export default function useCRUD(config: BaseConfig & OtherHooks & OtherConfig) {
  const { refreshApi, addApi, deleteApi, updateApi, beforeRefresh, afterRefresh, beforeAdd, afterAdd, beforeDelete, afterDelete, beforeUpdate, afterUpdate, beforeDetail, afterDetail } = config
  const { addDialog, editDialog, viewDialog } = config
  const listData = ref([])
  const loading = ref(false)

  // 查询参数
  const searchForm = ref<any>({})

  // 分页参数
  const currentPage = ref(1)
  const pageSize = ref(10)
  const pageTotal = ref(0)

  async function refresh() {
    if (!refreshApi || !isFunction(refreshApi)) {
      return
    }

    const _params = ref({
      ...searchForm.value,
      current: currentPage.value,
      size: pageSize.value,
    })

    const _other = ref({

    })
    if (isFunction(beforeRefresh)) {
      await beforeRefresh(_params, _other)
    }

    loading.value = true

    refreshApi(_params.value, _other.value).then((res: any) => {
      let _list = []
      if (res.code === 200) {
        if (res.data.records) {
          const { records = [], pages, total } = res.data
          _list = records
          pageTotal.value = total
          // 修正页码
          if (pages > 0 && currentPage.value > pages) {
            currentPage.value = pages
            refresh()
          }
        }
        else {
          _list = res.data
        }
      }
      else {
        _list = []
      }

      listData.value = _list
      if (isFunction(afterRefresh)) {
        afterRefresh(res)
      }
    }).finally(() => {
      loading.value = false
    })
  }

  function deleteRow(rows: any) {
    if (!isFunction(deleteApi)) {
      return
    }

    rows = Array.isArray(rows) ? rows : [rows]
    const _ids = rows.map((item: any) => item.id)
    const _idsString = _ids.join(',')
    ElMessageBox.confirm(rows.length > 1 ? `确定将选择的${rows.length}条数据删除?` : '确定将选择的数据删除?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(async () => {
      const _params = ref({ })
      const _other = ref({
        params: {
          ids: _idsString,
        },
      })

      if (isFunction(beforeDelete)) {
        await beforeDelete(_params, _other, rows)
      }

      deleteApi(_params.value, _other.value).then((res: any) => {
        if (res.code === 200) {
          ElMessage.success('删除成功')
          refresh()
        }
        if (isFunction(afterDelete)) {
          afterDelete(res)
        }
      })
    })
  }

  /** 查询按钮 */
  function searchHandler() {
    currentPage.value = 1
    refresh()
  }

  function resetHandler() {
    searchForm.value = { ...config.defaultParams }
    currentPage.value = 1
    refresh()
  }

  /** 序号 */
  function indexFn(index: number) {
    return (currentPage.value - 1) * pageSize.value + index + 1
  }

  return {
    /** 列表数据 */
    listData,
    /** 列表loading */
    loading,
    /** 查询列表 */
    refresh,
    /** 当前页数 */
    currentPage,
    /** 条目个数 */
    pageSize,
    /** 总条目数 */
    pageTotal,
    /** 查询表单 */
    searchForm,
    /** 查询按钮 */
    searchHandler,
    /** 重置按钮 */
    resetHandler,
    /** 列表序号 */
    indexFn,
    /** 删除 */
    deleteRow,
  }
}

/** 是否是函数 */
function isFunction(fn: any): fn is Function {
  return typeof fn === 'function'
}
