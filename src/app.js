import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './redux/index'
import Index from './pages/index/index'
import './app.scss'
import './fonts/iconfont.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore()

class App extends Component {

  config = {

    pages: ['pages/index/index','pages/post/post'],
    window: {
      navigationBarTitleText: 'WeChat',
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationStyle: "custom",
      navigationBarTextStyle: "white"
    },
    usingComponents: {
      "htmltowxml": "plugin://htmltowxml/view",
    },
    plugins: {
      "htmltowxml": {
        "version": "1.4.0",
        "provider": "wxa51b9c855ae38f3c"
      }
    }
    // tabBar: {
    //   list: [
    //     {
    //       pagePath: 'pages/index/index',
    //       text: '首页',
    //       iconPath: './images/home.png',
    //       selectedIconPath: './images/homeSelected.png',
    //     },
    //     {
    //       pagePath: 'pages/mine/mine',
    //       text: '我的',
    //       iconPath: './images/mine.png',
    //       selectedIconPath: './images/mineSelected.png',
    //     },
    //   ],
    // },
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
