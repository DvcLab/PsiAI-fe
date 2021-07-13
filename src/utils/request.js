import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  timeout: 50000
})

// request interceptor
service.interceptors.request.use(
  config => {
    const token = Vue.prototype.$keycloak.token
    token && (config.headers['Authorization'] = 'Bearer ' + token)
    //针对get方式进行序列化
    if (config.method === 'get') {
      config.paramsSerializer = function(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }
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
    // console.log(response)
    return response

  },
  error => {
    // 此处可以统一处理超时
    console.log('err:' + error)

    return Promise.reject(error)
  }
)

export default service
