import Taro from '@tarojs/taro'
import { HTTP_STATUS } from '../const/status'
import { BASE_URL  } from './config'
import { logError } from '../utils'
 
const token = 'hcx0629@'
 
const request = (params) =>{
    Taro.showLoading({
      title: '加载中',
      mask: true
    })
    let { url, data, method } = params
    // const option = {
    //   url: BASE_URL  + url,
    //   data: data,
    //   method: method,
    //   header: { 'content-type': 'application/json', 'API-Authorization': token },
    //   success(res) {
    //     Taro.hideLoading();
    //     if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
    //       return logError('api', '请求资源不存在')
    //     } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
    //       return logError('api', '服务端出现了问题')
    //     } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
    //       return logError('api', '没有权限访问')
    //     } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
    //       return res.data
    //     }
    //   },
    //   error(e) {
    //     Taro.hideLoading();
    //     logError('api', '请求接口出现问题', e)
    //   }
    // }
    return new Promise((resolve,reject)=>{
      Taro.request({
        url: BASE_URL + url,
        data: data,
        method: method,
        header: {
          'content-type': 'application/json',
          'API-Authorization': token
        }
      }).then((res) => {
        Taro.hideLoading()
        switch (res.data.status) {
          case 200:
            return resolve(res.data.data)
  
          // case 10014:
          //   // token校验失败
          //   Taro.navigateTo({
          //     url: '/pages/login/index'
          //   })
          //   Taro.clearStorageSync()
          //   return reject(res.data)
  
          // case 10002:
          //   // 缺少商户信息
          //   Taro.navigateTo({
          //     url: '/pages/login/index'
          //   })
          //   return reject(res.data)
  
          default:
            setTimeout(() => {
              Taro.showToast({
                title: res.data.comments,
                icon: 'none',
              })
            }, 500);
  
        }
      }).catch(err => {
        console.log('shibai',err);
        
        Taro.showToast({
          title: '小程序数据请求失败',
          icon: 'none'
        })
        return reject(err)
      })
    })
  }
  // get(url, data = '') {
  //   let option = { url, data }
  //   return this.baseOptions(option)
  // },
  // post: function (url, data, contentType) {
  //   let params = { url, data, contentType }
  //   return this.baseOptions(params, 'POST')
  // }

export default request