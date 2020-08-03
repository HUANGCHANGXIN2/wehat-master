(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/api/config.js":
/*!***************************!*\
  !*** ./src/api/config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BASE_URL = exports.BASE_URL = "https://blog.ykxingxin.cn/";

/***/ }),

/***/ "./src/api/request.js":
/*!****************************!*\
  !*** ./src/api/request.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _config = __webpack_require__(/*! ./config */ "./src/api/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = 'hcx0629@';

var request = function request(params) {
  _taroWeapp2.default.showLoading({
    title: '加载中',
    mask: true
  });
  var url = params.url,
      data = params.data,
      method = params.method;
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

  return new Promise(function (resolve, reject) {
    _taroWeapp2.default.request({
      url: _config.BASE_URL + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json',
        'API-Authorization': token
      }
    }).then(function (res) {
      _taroWeapp2.default.hideLoading();
      switch (res.data.status) {
        case 200:
          return resolve(res.data.data);

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
          setTimeout(function () {
            _taroWeapp2.default.showToast({
              title: res.data.comments,
              icon: 'none'
            });
          }, 500);

      }
    }).catch(function (err) {
      console.log('shibai', err);

      _taroWeapp2.default.showToast({
        title: '小程序数据请求失败',
        icon: 'none'
      });
      return reject(err);
    });
  });
};
// get(url, data = '') {
//   let option = { url, data }
//   return this.baseOptions(option)
// },
// post: function (url, data, contentType) {
//   let params = { url, data, contentType }
//   return this.baseOptions(params, 'POST')
// }

exports.default = request;

/***/ }),

/***/ "./src/api/user.js":
/*!*************************!*\
  !*** ./src/api/user.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = __webpack_require__(/*! ./request */ "./src/api/request.js");

var _request2 = _interopRequireDefault(_request);

var _index = __webpack_require__(/*! ../utils/index */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var userApi = {
  getList: function getList(params) {
    return (0, _request2.default)({
      url: 'api/content/categories/' + params.type + '/posts',
      method: 'get', // 请求方式
      data: params
    });
  },
  getList2: function getList2(params) {
    var data = (0, _index.param)(params);
    return (0, _request2.default)({
      url: 'api/content/posts?' + data,
      method: 'get' // 请求方式
    });
  },
  postList: function postList(params) {
    // let data = param(params)
    return (0, _request2.default)({
      url: 'api/content/posts/' + params,
      data: params,
      method: 'get' // 请求方式
    });
  },
  posts: function posts(params) {
    var data = (0, _index.param)(params);
    return (0, _request2.default)({
      url: 'api/content/posts/search?sort=createTime%2Cdesc&' + data,
      method: 'post', // 请求方式
      data: params
    });
  }
};

exports.default = userApi;

/***/ }),

/***/ "./src/redux/constants/index.js":
/*!**************************************!*\
  !*** ./src/redux/constants/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(/*! ./user */ "./src/redux/constants/user.js");

Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
    }
  });
});

/***/ }),

/***/ "./src/redux/constants/user.js":
/*!*************************************!*\
  !*** ./src/redux/constants/user.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_IS_OPENED = exports.SET_IS_OPENED = 'MODIFY_IS_OPENED';
var SET_LOGIN_INFO = exports.SET_LOGIN_INFO = 'SET_LOGIN_INFO';

var LOGIN = exports.LOGIN = 'LOGIN';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_ERROR = exports.LOGIN_ERROR = 'LOGIN_ERROR';
var LOGIN_NORMAL = exports.LOGIN_NORMAL = 'LOGIN_NORMAL';

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var promisify = exports.promisify = function promisify(func, ctx) {
  // 返回一个新的function
  return function () {
    var _arguments = arguments;

    // 初始化this作用域
    var ctx = ctx || this;
    // 新方法返回的promise
    return new Promise(function (resolve, reject) {
      // 调用原来的非promise方法func，绑定作用域，传参，以及callback（callback为func的最后一个参数）
      func.call.apply(func, [ctx].concat(Array.prototype.slice.call(_arguments), [function () {
        // 将回调函数中的的第一个参数error单独取出
        var args = Array.prototype.map.call(arguments, function (item) {
          return item;
        });
        var err = args.shift();
        // 判断是否有error
        if (err) {
          reject(err);
        } else {
          // 没有error则将后续参数resolve出来
          args = args.length > 1 ? args : args[0];
          resolve(args);
        }
      }]));
    });
  };
};

var promiseImage = exports.promiseImage = function promiseImage(url) {
  return new Promise(function (resolve, reject) {
    resolve(url);
  });
};
var isChinese = exports.isChinese = function isChinese(str) {
  if (escape(str).indexOf("%u") < 0) return false;
  return true;
};

var handleName = exports.handleName = function handleName(str) {
  var res = emoj2str(str);
  if (isChinese(res)) {
    res = res.length > 4 ? res.slice(0, 4) + '...' : res;
  } else {
    res = res.length > 7 ? res.slice(0, 7) + '...' : res;
  }
  return res;
};

var emoj2str = exports.emoj2str = function emoj2str(str) {
  return unescape(escape(str).replace(/\%uD.{3}/g, ''));
};
/*获取当前页url*/
var getCurrentPageUrl = exports.getCurrentPageUrl = function getCurrentPageUrl() {
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  var url = currentPage.route;
  return url;
};

var formatTime = exports.formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

var formatNumber = exports.formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};
var logError = exports.logError = function logError(name, action, info) {
  if (!info) {
    info = 'empty';
  }
  try {
    var deviceInfo = wx.getSystemInfoSync();
    var device = JSON.stringify(deviceInfo);
  } catch (e) {
    console.error('not support getSystemInfoSync api', err.message);
  }
  var time = formatTime(new Date());
  console.error(time, name, action, info, device);
  // if (typeof action !== 'object') {
  // fundebug.notify(name, action, info)
  // }
  // fundebug.notifyError(info, { name, action, device, time })
  if ((typeof info === 'undefined' ? 'undefined' : _typeof(info)) === 'object') {
    info = JSON.stringify(info);
  }
};

var param = exports.param = function param(data) {
  /*json转url格式*/
  try {
    var tempArr = [];
    for (var i in data) {
      var key = encodeURIComponent(i);
      var value = encodeURIComponent(data[i]);
      tempArr.push(key + '=' + value);
    }
    var urlParamsStr = tempArr.join('&');
    return urlParamsStr;
  } catch (err) {
    return '';
  }
};

var customFormatTime = exports.customFormatTime = function customFormatTime(number, format) {

  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(number);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
};

/***/ })

}]);