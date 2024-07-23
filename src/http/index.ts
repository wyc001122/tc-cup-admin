import type { CustomParamsSerializer, ParamEncoder } from 'axios'
import axios from 'axios'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { parse, stringify } from 'qs'
import errHandler from './errHandler'
import { AUTHORIZATION, getCupAuth } from '@/utils/token-utils'

const { isLoading } = useNProgress()

const api = axios.create({
  baseURL: import.meta.env.DEV ? '/proxy' : '',
  timeout: 1000 * 10, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  paramsSerializer: {
    encode: parse as ParamEncoder,
    serialize: stringify as CustomParamsSerializer,
  },
})

const WHITE_LIST = ['/cup-auth/oauth/token']

/** 是否正在刷新token,如果正在刷新 */
api.interceptors.request.use(async (config) => {
  isLoading.value = true
  config.headers.Authorization = AUTHORIZATION

  if (!WHITE_LIST.includes(config.url as string)) {
    config.headers['Cup-Auth'] = getCupAuth()
  }

  return config
})

api.interceptors.response.use((response) => {
  isLoading.value = false
  if (response.data.code !== 200 && response.config.url !== '/cup-auth/oauth/token') {
    ElMessage.error(response.data.msg)
  }
  return Promise.resolve(response.data)
}, (err) => {
  isLoading.value = false

  return errHandler(err)
})

export default api
