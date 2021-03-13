import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  timeout: 50000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 此处可以设置请求头等信息
    console.log(config)
    return config
  },
  error => {
    console.log('err:' + error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  response => {
    // 此处可以统一处理错误
    console.log(response)
    return response

  },
  error => {
    // 此处可以统一处理超时
    console.log('err:' + error)

    return Promise.reject(error)
  }
)

export default service
