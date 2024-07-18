import type {
  menu_list,
} from '@/api/modules/cup-sys/menu'
import type { MaybeRef } from 'vue'

interface SearchForm {
  keywords?: string
  withParents?: boolean
}

type RowTableData = ExtractAxiosData<typeof menu_list>

export function useFilterData(searchForm: Ref<SearchForm>) {
  /** 搜索方法 */
  function filterHandler(rowTableData: MaybeRef<RowTableData>) {
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
      return unref(rowTableData)
    }
  }

  /** 递归遍历(深度优先) */
  function treeDepTraverse(data: any, callback: any) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].children) {
        treeDepTraverse(data[i].children, callback)
      }
      callback(data[i], data)
    }
  }

  return filterHandler
}

export const DEFAULT_DATA = {
  ADD: {
    parentId: '0',
    category: 0,
    isOpen: 0,
    showLink: true,
    sort: 1,
    path: '/',
  },
  ADDSON: {
    category: 1,
    isOpen: 0,
    showLink: true,
    sort: 1,
  },
}
