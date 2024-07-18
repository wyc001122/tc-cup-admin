import refreshToken from './refreshToken'

export default (err: any) => {
  const response = err.response
  const statusText = response?.statusText
  const status = err.response?.status
  const msg = err.response.data?.msg ?? statusText

  switch (status) {
    case 400 :
      break
    case 401:
      return refreshToken(err)
    default:
      ElMessage.error(msg)
      return Promise.reject(err)
  }
}
