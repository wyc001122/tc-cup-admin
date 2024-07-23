import refreshToken from './refreshToken'

export default (err: any) => {
  // 请求了，但没成功，所以无响应
  if (!err.response) {
    ElMessage.error(err.message)
    return Promise.reject(err)
  }

  // 响应但报错
  const response = err.response
  const statusText = response?.statusText
  const status = err.response?.status
  const msg = err.response.data?.msg ?? statusText

  switch (status) {
    case 401:
      return refreshToken(err)
  }

  ElMessage.error(msg)
  return Promise.reject(err)
}
