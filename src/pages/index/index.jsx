import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem, AtAvatar, AtTabs, AtTabsPane } from "taro-ui";
import { useSelector } from "@tarojs/redux";
import userApi from "../../api/user";
import WeappLoginButton from "../../components/WeappLoginButton/WeappLoginButton";
import Search from "../../components/searchs/search";
import HomeList from "../../components/lists/lists";
import ImageList from "../../components/lists/imageList";
import HomeSwiper from "../../components/Swipers";
import Jinrishici from "../../utils/jinrishici";
import "./index.scss";

export default function Index(props) {
  const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP;
  const isWeb = Taro.getEnv() === Taro.ENV_TYPE.WEB;
  const [params, setParams] = useState({ page: 0, size: 100, type: "myfiles" });
  const [showContent, setShowContent] = useState("");
  const [show, setShow] = useState(true);
  const [showNav, setShowNav] = useState("");
  const [clientX, setClientX] = useState("");
  const [clientY, setClientY] = useState("");
  const [dataList, setDataList] = useState("");
  const [swDataList, setSwDataList] = useState("");
  const [LoginInfo, setLoginInfo] = useState(false);
  const [jinrishici, setJinrishici] = useState("");
  const [modalStyle, setModalStyle] = useState("");
  const [current, setCurrent] = useState("false");
  const [tabShow, setTabShow] = useState(true);
  const [change, setChange] = useState(1); // 必须在子组件定义一个状态值，来监听数据发生改变。否则useEffect不会更新即组件不会更新
  const oldClassNav = {
    transform: "scale(0.9, 0.9) translateX(-100%)",
    opacity: 0,
  };
  const classContent = {
    transform: "scale(0.9, 0.9) translateX(95%)",
    // boxShadow: "4px 8px 26px rgba(0, 0, 0, 0.300)",
    opacity: 0.8,
  };
  const classNav = {
    transform: "scale(1, 1) translateX(10%)",
    opacity: 1,
    pointerEvents: "all",
  };
  const indexTabStyle = {
    color: "#0081ff",
    textShadow: "6px 6px 8px rgba(0, 102, 204, 0.2)",
    fontSize: "34rpx",
  };
  const colors = (res) => {
    let colors = [
      "#e54d42",
      "#f37b1d",
      "#8dc63f",
      "#39b54a",
      "#fbbd08",
      "#1cbbb4",
      "#0081ff",
      "#6739b6",
      "#9c26b0",
      "#e03997",
      "#a5673f",
      "#8799a3",
    ]; // 定义list背景颜色数组
    let time = ["1s", "2s"]; // 定义animation-duration执行的秒数

    for (let index = 0; index < res.content.length; index++) {
      let dataBgIndex = parseInt(Math.random() * colors.length); // 从colors中返回一个随机数取整获得索引
      let dataTimeIndex = parseInt(Math.random() * time.length); // 从colors中返回一个随机数取整获得索引

      res.content[index].listBackground = colors[dataBgIndex]; // 循环在每一项中添加随机颜色
      res.content[index].listTime = time[dataTimeIndex]; // 循环在每一项中添加随机时间
      colors.splice(dataBgIndex, 1); // 颜色不重复，没次循环删除已经使用的颜色
    }
  };
  // 获取登录信息
  useEffect(() => {
    async function getStorage() {
      try {
        const { data } = await Taro.getStorage({ key: "userInfo" });
        setLoginInfo(data);
      } catch (err) {
        console.log("获取userInfo失败: ", err);
      }
    }
    getStorage();
    console.log("最新的", LoginInfo);
  }, [change]);

  useEffect(() => {
    Jinrishici.load((result) => {
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
  useEffect(() => {
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
  const onShow = (e) => {
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
  const onShow2 = (e) => {
    console.log("关闭");
    e.stopPropagation();
    if (!show) {
      setShowContent("");
      setShowNav(oldClassNav);
      setShow(true);
      setModalStyle({ display: "none" });
    }
  };
  const handleTouchStart = (e) => {
    setClientX(e.changedTouches[0].clientX);
  };
  const handleTouchMove = (e) => {
    // console.log("移动中");
    // console.log(e);
  };
  const handleTouchEnd = (e) => {
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
  const getlist = () => {
    userApi.getList(params).then((res) => {
      colors(res);
      setDataList(res.content);
      setSwDataList(res.content);
    });
  };
  const onAtList = (e) => {
    console.log(e);
  };
  const handleClick = (e) => {
    e == 1
      ? setParams({ page: 0, size: 100, type: "myimages" })
      : setParams({ page: 0, size: 100, type: "myfiles" });
    setCurrent(e);
    setTabShow(false);
  };
  // 滑动事件

  // 更新
  const autoUpdate = () => {
    console.log(new Date());
    var self = this;
    // 获取小程序更新机制兼容
    if (wx.canIUse("getUpdateManager")) {
      const updateManager = wx.getUpdateManager();
      //1. 检查小程序是否有新版本发布
      updateManager.onCheckForUpdate(function(res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          //2. 小程序有新版本，则静默下载新版本，做好更新准备
          updateManager.onUpdateReady(function() {
            console.log(new Date());
            wx.showModal({
              title: "更新提示",
              content: "新版本已经准备好，是否重启应用？",
              success: function(res) {
                if (res.confirm) {
                  //3. 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate();
                } else if (res.cancel) {
                  //如果需要强制更新，则给出二次弹窗，如果不需要，则这里的代码都可以删掉了
                  wx.showModal({
                    title: "温馨提示~",
                    content:
                      "本次版本更新涉及到新的功能添加，旧版本无法正常访问的哦~",
                    success: function(res) {
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
                    },
                  });
                }
              },
            });
          });
          updateManager.onUpdateFailed(function() {
            // 新的版本下载失败
            wx.showModal({
              title: "已经有新版本了哟~",
              content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~",
            });
          });
        }
      });
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: "提示",
        content:
          "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。",
      });
    }
  };
  return (
    <View className="index">
      {/* 左侧导航栏 */}
      <View
        className="nav"
        style={showNav}
        // onClick={() => onShow2()}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
      >
        <View className="nav-list">
          {/* 登录 */}
          <View className="list-wxsq">
            <View
              className="list-wxsq-title"
              style={{ display: LoginInfo ? "" : "none" }}
            >
              <AtAvatar image={LoginInfo.avatarUrl} circle size="large" />
              <View className="title-right">
                <View>{LoginInfo.nickName}</View>
              </View>
            </View>
            <View style={LoginInfo ? { display: "none" } : { display: "" }}>
              {isWeapp && <WeappLoginButton setChange={setChange} />}{" "}
              {/* 小程序 */}
              {isWeb && <p>登录</p>} {/* h5 */}
            </View>
            {/* <WeappLoginButton  /> */}
          </View>
          <View className="list-data">
            <AtList>
              <button open-type="contact">11</button>
              <AtListItem
                title="GitHub"
                arrow="right"
                onClick={() => onAtList("GitHub")}
                iconInfo={{
                  size: 18,
                  value: "bookmark",
                  className: "iconfont icon-github",
                }}
              />
              <AtListItem
                title="联系作者"
                arrow="right"
                iconInfo={{
                  size: 18,
                  color: "#40a9ff",
                  value: "bookmark",
                  className: "icon-OvalCopy",
                }}
              />
              <AtListItem
                title="WeHello"
                arrow="right"
                iconInfo={{
                  size: 18,
                  value: "bookmark",
                  className: "iconfont icon-W",
                }}
              />
              <AtListItem
                title="意见反馈"
                arrow="right"
                iconInfo={{
                  size: 18,
                  color: "#40a9ff",
                  value: "bookmark",
                  className: "iconfont icon-xiezi",
                }}
              />
              <AtListItem
                title="友情链接"
                arrow="right"
                iconInfo={{
                  size: 18,
                  value: "bookmark",
                  className: "iconfont icon-lianjie2",
                }}
              />
            </AtList>
          </View>
        </View>
        <View className="nav-bottom">WeHello</View>
      </View>
      {/* 左侧导航栏 */}
      {/* 首页内容 */}
      <View className="content" style={showContent}>
        <View
          className="modal"
          style={modalStyle}
          onClick={(e) => onShow2(e)}
        ></View>
        <View
          className="title"
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchEnd={(e) => handleTouchEnd(e)}
        >
          <View onClick={(e) => onShow(e)} className="content-avatar">
            <AtAvatar
              image="https://blog.ykxingxin.cn/upload/2020/07/logoM-a7c9916e236b457d9c94fe1216fd77ad.png"
              circle
              size="small"
            />
          </View>
          <View className="title-content">
            <View>我和她和猫</View>
            <View className="jinrishici">{jinrishici}</View>
          </View>
        </View>
        <View className="index-swiper">
          <HomeSwiper getHomeList={swDataList} />
        </View>
        <View>
          <Search
            setDataList={setDataList}
            setCurrent={setCurrent}
            colors={colors}
          />
        </View>
        <View>
          <View className="index-tab">
            <View
              style={current == 0 ? indexTabStyle : ""}
              onClick={() => handleClick(0)}
            >
              学海无涯
            </View>
            <View
              style={current == 1 ? indexTabStyle : ""}
              onClick={() => handleClick(1)}
            >
              回头是岸
            </View>
          </View>
          <View
            className="index-list"
            onTouchStart={(e) => handleTouchStart(e)}
            onTouchEnd={(e) => handleTouchEnd(e)}
          >
            <HomeList getDataList={dataList} />
          </View>
        </View>
      </View>
      {/* 首页内容 */}
    </View>
  );
}
