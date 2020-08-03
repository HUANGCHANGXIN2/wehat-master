import Taro from "@tarojs/taro";
import { Button, View } from "@tarojs/components";
import { useDispatch } from "@tarojs/redux";
import { SET_LOGIN_INFO } from "../../redux/constants";
import "./index.scss";

export default function LoginButton(props) {
  const dispatch = useDispatch();
  async function onGetUserInfo(e) {
    await Taro.setStorage({
      key: "userInfo",
      data: e.detail.userInfo,
    });
    dispatch({ type: SET_LOGIN_INFO, payload: e.detail.userInfo });
    props.setChange(2);
  }
  return (
    <View>
      <View className="title">允许微信授权后，可体验更多功能</View>
      <Button
        openType="getUserInfo"
        onGetUserInfo={onGetUserInfo}
        type="primary"
        className="login-button"
      >
        微信登录
      </Button>
    </View>
  );
}
