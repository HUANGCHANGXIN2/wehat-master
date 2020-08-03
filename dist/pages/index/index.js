(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _user = __webpack_require__(/*! ../../api/user */ "./src/api/user.js");

var _user2 = _interopRequireDefault(_user);

var _jinrishici = __webpack_require__(/*! ../../utils/jinrishici */ "./src/utils/jinrishici.js");

var _jinrishici2 = _interopRequireDefault(_jinrishici);

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp10", "anonymousState__temp11", "anonymousState__temp12", "$compid__111", "$compid__112", "$compid__113", "$compid__114", "$compid__115", "$compid__116", "$compid__117", "$compid__118", "$compid__119", "$compid__120", "$compid__121", "isWeapp", "isWeb", "LoginInfo", "jinrishici"], _this.customComponents = ["AtAvatar", "WeappLoginButton", "AtList", "AtListItem", "HomeSwiper", "Search", "HomeList"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__111"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__111 = _genCompid2[0],
          $compid__111 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__112"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__112 = _genCompid4[0],
          $compid__112 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__113"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__113 = _genCompid6[0],
          $compid__113 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__114"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__114 = _genCompid8[0],
          $compid__114 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__115"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__115 = _genCompid10[0],
          $compid__115 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__116"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__116 = _genCompid12[0],
          $compid__116 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__117"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__117 = _genCompid14[0],
          $compid__117 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__118"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__118 = _genCompid16[0],
          $compid__118 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__119"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__119 = _genCompid18[0],
          $compid__119 = _genCompid18[1];

      var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "$compid__120"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__120 = _genCompid20[0],
          $compid__120 = _genCompid20[1];

      var _genCompid21 = (0, _taroWeapp.genCompid)(__prefix + "$compid__121"),
          _genCompid22 = _slicedToArray(_genCompid21, 2),
          $prevCompid__121 = _genCompid22[0],
          $compid__121 = _genCompid22[1];

      var props = this.__props;

      var isWeapp = _taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEAPP;
      var isWeb = _taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEB;

      var _useState = (0, _taroWeapp.useState)({ page: 0, size: 100, type: "myfiles" }),
          _useState2 = _slicedToArray(_useState, 2),
          params = _useState2[0],
          setParams = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)(""),
          _useState4 = _slicedToArray(_useState3, 2),
          showContent = _useState4[0],
          setShowContent = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)(true),
          _useState6 = _slicedToArray(_useState5, 2),
          show = _useState6[0],
          setShow = _useState6[1];

      var _useState7 = (0, _taroWeapp.useState)(""),
          _useState8 = _slicedToArray(_useState7, 2),
          showNav = _useState8[0],
          setShowNav = _useState8[1];

      var _useState9 = (0, _taroWeapp.useState)(""),
          _useState10 = _slicedToArray(_useState9, 2),
          clientX = _useState10[0],
          setClientX = _useState10[1];

      var _useState11 = (0, _taroWeapp.useState)(""),
          _useState12 = _slicedToArray(_useState11, 2),
          clientY = _useState12[0],
          setClientY = _useState12[1];

      var _useState13 = (0, _taroWeapp.useState)(""),
          _useState14 = _slicedToArray(_useState13, 2),
          dataList = _useState14[0],
          setDataList = _useState14[1];

      var _useState15 = (0, _taroWeapp.useState)(""),
          _useState16 = _slicedToArray(_useState15, 2),
          swDataList = _useState16[0],
          setSwDataList = _useState16[1];

      var _useState17 = (0, _taroWeapp.useState)(false),
          _useState18 = _slicedToArray(_useState17, 2),
          LoginInfo = _useState18[0],
          setLoginInfo = _useState18[1];

      var _useState19 = (0, _taroWeapp.useState)(""),
          _useState20 = _slicedToArray(_useState19, 2),
          jinrishici = _useState20[0],
          setJinrishici = _useState20[1];

      var _useState21 = (0, _taroWeapp.useState)(""),
          _useState22 = _slicedToArray(_useState21, 2),
          modalStyle = _useState22[0],
          setModalStyle = _useState22[1];

      var _useState23 = (0, _taroWeapp.useState)("false"),
          _useState24 = _slicedToArray(_useState23, 2),
          current = _useState24[0],
          setCurrent = _useState24[1];

      var _useState25 = (0, _taroWeapp.useState)(true),
          _useState26 = _slicedToArray(_useState25, 2),
          tabShow = _useState26[0],
          setTabShow = _useState26[1];

      var _useState27 = (0, _taroWeapp.useState)(1),
          _useState28 = _slicedToArray(_useState27, 2),
          change = _useState28[0],
          setChange = _useState28[1]; // 必须在子组件定义一个状态值，来监听数据发生改变。否则useEffect不会更新即组件不会更新


      var oldClassNav = {
        transform: "scale(0.9, 0.9) translateX(-100%)",
        opacity: 0
      };
      var classContent = {
        transform: "scale(0.9, 0.9) translateX(95%)",
        // boxShadow: "4px 8px 26px rgba(0, 0, 0, 0.300)",
        opacity: 0.8
      };
      var classNav = {
        transform: "scale(1, 1) translateX(10%)",
        opacity: 1,
        pointerEvents: "all"
      };
      var indexTabStyle = {
        color: "#0081ff",
        textShadow: "6px 6px 8px rgba(0, 102, 204, 0.2)",
        fontSize: "34rpx"
      };
      var colors = function colors(res) {
        var colors = ["#e54d42", "#f37b1d", "#8dc63f", "#39b54a", "#fbbd08", "#1cbbb4", "#0081ff", "#6739b6", "#9c26b0", "#e03997", "#a5673f", "#8799a3"]; // 定义list背景颜色数组
        var time = ["1s", "2s"]; // 定义animation-duration执行的秒数

        for (var index = 0; index < res.content.length; index++) {
          var dataBgIndex = parseInt(Math.random() * colors.length); // 从colors中返回一个随机数取整获得索引
          var dataTimeIndex = parseInt(Math.random() * time.length); // 从colors中返回一个随机数取整获得索引

          res.content[index].listBackground = colors[dataBgIndex]; // 循环在每一项中添加随机颜色
          res.content[index].listTime = time[dataTimeIndex]; // 循环在每一项中添加随机时间
          colors.splice(dataBgIndex, 1); // 颜色不重复，没次循环删除已经使用的颜色
        }
      };
      // 获取登录信息
      (0, _taroWeapp.useEffect)(function () {
        var getStorage = function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref3, data;

            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _taroWeapp2.default.getStorage({ key: "userInfo" });

                  case 3:
                    _ref3 = _context.sent;
                    data = _ref3.data;

                    setLoginInfo(data);
                    _context.next = 11;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);

                    console.log("获取userInfo失败: ", _context.t0);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 8]]);
          }));

          return function getStorage() {
            return _ref2.apply(this, arguments);
          };
        }();

        getStorage();
        console.log("最新的", LoginInfo);
      }, [change]);

      (0, _taroWeapp.useEffect)(function () {
        _jinrishici2.default.load(function (result) {
          console.log(result);
          // 下面是处理逻辑示例
          // this.setData({
          //     jinrishici: result.data.content
          // });
          setJinrishici(result.data.content);
        });
        // 版本更新
        autoUpdate();
      }, [""]);
      (0, _taroWeapp.useEffect)(function () {
        // if (tabShow) {
        //   userApi.getList2({ page: 0, size: 100 }).then((res) => {
        //     colors(res);
        //     setDataList(res.content);
        //     setSwDataList(res.content);
        //   });
        // } else {
        getlist();
        // }
      }, [params]);
      // 打开侧边栏
      var onShow = function onShow(e) {
        console.log("打开");

        e.stopPropagation();
        if (show) {
          setShowContent(classContent);
          setShowNav(classNav);
          setShow(false);
          setModalStyle({ display: "inline" });
        }
      };

      // 隐藏侧边栏
      var onShow2 = function onShow2(e) {
        console.log("关闭");
        e.stopPropagation();
        if (!show) {
          setShowContent("");
          setShowNav(oldClassNav);
          setShow(true);
          setModalStyle({ display: "none" });
        }
      };
      var handleTouchStart = function handleTouchStart(e) {
        setClientX(e.changedTouches[0].clientX);
      };
      var handleTouchMove = function handleTouchMove(e) {
        // console.log("移动中");
        // console.log(e);
      };
      var handleTouchEnd = function handleTouchEnd(e) {
        if (e.changedTouches[0].clientX - clientX > 150) {
          console.log("右滑");
          setShowContent(classContent);
          setShowNav(classNav);
          setShow(false);
          setModalStyle({ display: "inline" });
        } else if (e.changedTouches[0].clientX - clientX < -120) {
          console.log("左滑");
          setShowNav(oldClassNav);
          setShowContent("");
          setShow(true);
          setModalStyle({ display: "none" });
        }
      };
      var getlist = function getlist() {
        _user2.default.getList(params).then(function (res) {
          colors(res);
          setDataList(res.content);
          setSwDataList(res.content);
        });
      };
      var onAtList = function onAtList(e) {
        console.log(e);
      };
      var handleClick = function handleClick(e) {
        e == 1 ? setParams({ page: 0, size: 100, type: "myimages" }) : setParams({ page: 0, size: 100, type: "myfiles" });
        setCurrent(e);
        setTabShow(false);
      };
      // 滑动事件

      // 更新
      var autoUpdate = function autoUpdate() {
        console.log(new Date());
        var self = _this2;
        // 获取小程序更新机制兼容
        if (wx.canIUse("getUpdateManager")) {
          var updateManager = wx.getUpdateManager();
          //1. 检查小程序是否有新版本发布
          updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            if (res.hasUpdate) {
              //2. 小程序有新版本，则静默下载新版本，做好更新准备
              updateManager.onUpdateReady(function () {
                console.log(new Date());
                wx.showModal({
                  title: "更新提示",
                  content: "新版本已经准备好，是否重启应用？",
                  success: function success(res) {
                    if (res.confirm) {
                      //3. 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                      updateManager.applyUpdate();
                    } else if (res.cancel) {
                      //如果需要强制更新，则给出二次弹窗，如果不需要，则这里的代码都可以删掉了
                      wx.showModal({
                        title: "温馨提示~",
                        content: "本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦~",
                        success: function success(res) {
                          self.autoUpdate();
                          return;
                          //第二次提示后，强制更新
                          if (res.confirm) {
                            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                            updateManager.applyUpdate();
                          } else if (res.cancel) {
                            //重新回到版本更新提示
                            self.autoUpdate();
                          }
                        }
                      });
                    }
                  }
                });
              });
              updateManager.onUpdateFailed(function () {
                // 新的版本下载失败
                wx.showModal({
                  title: "已经有新版本了哟~",
                  content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                });
              });
            }
          });
        } else {
          // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
          wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
          });
        }
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(showNav);

      this.anonymousFunc0 = function (e) {
        return handleTouchStart(e);
      };

      this.anonymousFunc1 = function (e) {
        return handleTouchEnd(e);
      };

      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ display: LoginInfo ? "" : "none" });
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(LoginInfo ? { display: "none" } : { display: "" });

      this.anonymousFunc2 = function () {
        return onAtList("GitHub");
      };

      var anonymousState__temp4 = {
        size: 18,
        value: "bookmark",
        className: "iconfont icon-github"
      };
      var anonymousState__temp5 = {
        size: 18,
        color: "#40a9ff",
        value: "bookmark",
        className: "icon-OvalCopy"
      };
      var anonymousState__temp6 = {
        size: 18,
        value: "bookmark",
        className: "iconfont icon-W"
      };
      var anonymousState__temp7 = {
        size: 18,
        color: "#40a9ff",
        value: "bookmark",
        className: "iconfont icon-xiezi"
      };
      var anonymousState__temp8 = {
        size: 18,
        value: "bookmark",
        className: "iconfont icon-lianjie2"
      };
      var anonymousState__temp9 = (0, _taroWeapp.internal_inline_style)(showContent);
      var anonymousState__temp10 = (0, _taroWeapp.internal_inline_style)(modalStyle);

      this.anonymousFunc3 = function (e) {
        return onShow2(e);
      };

      this.anonymousFunc4 = function (e) {
        return handleTouchStart(e);
      };

      this.anonymousFunc5 = function (e) {
        return handleTouchEnd(e);
      };

      this.anonymousFunc6 = function (e) {
        return onShow(e);
      };

      var anonymousState__temp11 = (0, _taroWeapp.internal_inline_style)(current == 0 ? indexTabStyle : "");

      this.anonymousFunc7 = function () {
        return handleClick(0);
      };

      var anonymousState__temp12 = (0, _taroWeapp.internal_inline_style)(current == 1 ? indexTabStyle : "");

      this.anonymousFunc8 = function () {
        return handleClick(1);
      };

      this.anonymousFunc9 = function (e) {
        return handleTouchStart(e);
      };

      this.anonymousFunc10 = function (e) {
        return handleTouchEnd(e);
      };

      _taroWeapp.propsManager.set({
        "image": LoginInfo.avatarUrl,
        "circle": true,
        "size": "large"
      }, $compid__111, $prevCompid__111);
      isWeapp && _taroWeapp.propsManager.set({
        "setChange": setChange
      }, $compid__112, $prevCompid__112);
      _taroWeapp.propsManager.set({
        "title": "GitHub",
        "arrow": "right",
        "onClick": this.anonymousFunc2,
        "iconInfo": anonymousState__temp4
      }, $compid__113, $prevCompid__113);
      _taroWeapp.propsManager.set({
        "title": "\u8054\u7CFB\u4F5C\u8005",
        "arrow": "right",
        "iconInfo": anonymousState__temp5
      }, $compid__114, $prevCompid__114);
      _taroWeapp.propsManager.set({
        "title": "WeHello",
        "arrow": "right",
        "iconInfo": anonymousState__temp6
      }, $compid__115, $prevCompid__115);
      _taroWeapp.propsManager.set({
        "title": "\u610F\u89C1\u53CD\u9988",
        "arrow": "right",
        "iconInfo": anonymousState__temp7
      }, $compid__116, $prevCompid__116);
      _taroWeapp.propsManager.set({
        "title": "\u53CB\u60C5\u94FE\u63A5",
        "arrow": "right",
        "iconInfo": anonymousState__temp8
      }, $compid__117, $prevCompid__117);
      _taroWeapp.propsManager.set({
        "image": "https://blog.ykxingxin.cn/upload/2020/07/logoM-a7c9916e236b457d9c94fe1216fd77ad.png",
        "circle": true,
        "size": "small"
      }, $compid__118, $prevCompid__118);
      _taroWeapp.propsManager.set({
        "getHomeList": swDataList
      }, $compid__119, $prevCompid__119);
      _taroWeapp.propsManager.set({
        "setDataList": setDataList,
        "setCurrent": setCurrent,
        "colors": colors
      }, $compid__120, $prevCompid__120);
      _taroWeapp.propsManager.set({
        "getDataList": dataList
      }, $compid__121, $prevCompid__121);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp10: anonymousState__temp10,
        anonymousState__temp11: anonymousState__temp11,
        anonymousState__temp12: anonymousState__temp12,
        $compid__111: $compid__111,
        $compid__112: $compid__112,
        $compid__113: $compid__113,
        $compid__114: $compid__114,
        $compid__115: $compid__115,
        $compid__116: $compid__116,
        $compid__117: $compid__117,
        $compid__118: $compid__118,
        $compid__119: $compid__119,
        $compid__120: $compid__120,
        $compid__121: $compid__121,
        isWeapp: isWeapp,
        isWeb: isWeb,
        LoginInfo: LoginInfo,
        jinrishici: jinrishici
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: "anonymousFunc10",
    value: function anonymousFunc10(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Desktop\\project\\react\\myApp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/Desktop/project/react/myApp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_E_Desktop_project_react_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/Desktop/project/react/myApp/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Desktop\\project\\react\\myApp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_E_Desktop_project_react_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_E_Desktop_project_react_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_E_Desktop_project_react_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_E_Desktop_project_react_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/jinrishici.js":
/*!*********************************!*\
  !*** ./src/utils/jinrishici.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 今日诗词V2 Mini-Program-SDK 1.0
 * https://www.jinrishici.com
 */
var waitingQueue = [];
var lock = false;
var load = function load(callback) {
  getTokenAndDo(function (token) {
    wx.request({
      url: 'https://v2.jinrishici.com/one.json?client=mini-progrram-sdk/1.0',
      header: {
        'X-User-Token': token
      },
      success: function success(res) {
        if (res.data.status === "success") {
          callback(res.data);
        } else {
          console.error("今日诗词API 获取古诗词 失败，错误原因：" + res.data.errMessage);
        }
      },
      fail: function fail() {
        console.error("今日诗词-小程序SDK 获取古诗词失败，可能是网络问题或者您没有添加到域名白名单");
      }
    });
  });
};

var getTokenAndDo = function getTokenAndDo(callback) {
  var token = wx.getStorageSync("jinrishici-token");
  if (token) {
    callback(token);
  } else {
    waitingQueue.push(callback);
    if (lock) {
      return;
    }
    lock = true;
    wx.request({
      url: 'https://v2.jinrishici.com/token?client=mini-progrram-sdk/1.0',
      success: function success(res) {
        if (res.data.status === "success") {
          wx.setStorageSync("jinrishici-token", res.data.data);
          lock = false;
          while (waitingQueue.length > 0) {
            waitingQueue.pop()(res.data.data);
          }
        } else {
          console.error("今日诗词API获取 Token 失败，错误原因：" + res.data.errMessage);
          lock = false;
        }
      },
      fail: function fail() {
        console.error("今日诗词-小程序SDK 获取 Token 失败，可能是网络问题或者您没有添加到域名白名单");
      }
    });
  }
};

module.exports = {
  load: load
};

/***/ })

},[["./src/pages/index/index.jsx","runtime","vendors","common"]]]);