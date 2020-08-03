import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import Index from "../index/index";
import "./index.scss";

export default function Home() {
  return (
    <View className="home">
        {/* 首页内容 */}
        <Index />
    </View>
  );
}

// Home.config = {
//   navigationBarTitleText: "首页",
// };
