import request from './request'
import { param } from '../utils'
// login = async(userInfo) => {
// const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
// const isAlipay = Taro.getEnv() === Taro.ENV_TYPE.ALIPAY

//   // 针对微信小程序使用小程序云函数，其他使用小程序 RESTful API
//   try {
//     if (isWeapp) {
//       const { result } = await Taro.cloud.callFunction({
//         name: 'login',
//         data: {
//           userInfo,
//         },
//       })

//       return result.user
//     }
//   } catch (err) {
//     console.error('login ERR: ', err)
//   }
// }

// getList = async(params)=> {
//   const res = await Taro.request({
//     url: 'test.php', //仅为示例，并非真实的接口地址
//     data: params,
//     success: function (res) {
//       console.log(res.data)
//     }
//   })
// }

const userApi = {

  getList(params){
    return request({
      url:`api/content/categories/${params.type}/posts`,
      method: 'get', // 请求方式
      data:params
    })
  },
  getList2(params){
    let data = param(params)
    return request({
      url:'api/content/posts?'+data,
      method: 'get', // 请求方式
    })
  },
  postList(params){
    // let data = param(params)
    return request({
      url:'api/content/posts/'+params,
      data:params,
      method: 'get', // 请求方式
    })
  },
  posts(params){
    let data = param(params)
    return request({
      url:'api/content/posts/search?sort=createTime%2Cdesc&'+data,
      method: 'post', // 请求方式
      data:params,
    })
  }
}

export default userApi
