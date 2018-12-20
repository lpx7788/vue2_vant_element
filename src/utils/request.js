import axios from 'axios'
import qs from 'qs'

var instance = axios.create({
  timeout: 50000,
  baseURL: 'http://rsjkkj.com/',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})
instance.interceptors.request.use(
  function (config) {
    console.log(config)
    if (config.method.toUpperCase() === 'POST') {
      config.data = qs.stringify(Object.assign({
        // token,
        // client: 'wap'
      }, qs.parse(config.data)))
    } else {
      config.params = Object.assign({
        // key: key,
        // client: 'wap'
      }, config.params)
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
export default instance
