import Taro, { useEffect, useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtNavBar, AtIcon } from "taro-ui";
import userApi from "../../api/user";
import { customFormatTime } from "../../utils";
import "./index.scss";

export default function PostCard(props) {
  // config = {
  //   usingComponents: {
  //     'parser': '../../components/parser/parser' // 引入插件包
  //   }
  // }
  // const handleClick = () =>{
  //   if (props.isList) {
  //     const {title,content} = this.props
  //     Taro.navigateTo({url:`/pages/post/post?title=${title}&content=${content}`,})
  //   }
  // }
  // console.log(props);
  const [dataList, setDataList] = useState("");
  useEffect(() => {
    userApi.postList(props.listId).then((res) => {
      if (res) {
        setDataList(res);
      }
    });
  }, [""]);
  const handleClick = () => {
    Taro.navigateBack({
      delta: 1, // 返回上一级页面。
    });
  };
  const html111 = "<p>123</p>";
  return (
    <View className="postcard">
      <View className="postcard-nav">
        <AtNavBar
          onClickLeftIcon={handleClick}
          leftIconType="chevron-left"
          color="#fff"
        />
      </View>

      <View className="postcard-tab">
        <View className="tab-cnt" style={{ border: "1px solid #e54d42" }}>
          <View className="cnt-ic" style={{ background: "#e54d42" }}>
            <AtIcon prefixClass="icon" value="zan1" size="12" color="#fff" />
          </View>
          <View className="cnt-text" style={{ color: "#e54d42" }}>
            {dataList.likes}
          </View>
        </View>
        <View className="tab-cnt" style={{ border: "1px solid #f37b1d" }}>
          <View className="cnt-ic" style={{ background: "#f37b1d" }}>
            <AtIcon
              prefixClass="icon"
              value="icon-test"
              size="12"
              color="#fff"
            />
          </View>
          <View className="cnt-text" style={{ color: "#f37b1d" }}>
            {dataList.visits}
          </View>
        </View>
        <View
          className="tab-cnt"
          style={{ border: "1px solid #0081ff", width: "100px" }}
        >
          <View
            className="cnt-ic"
            style={{ background: "#0081ff", width: "30%" }}
          >
            <AtIcon
              prefixClass="icon"
              value="shijian00"
              size="12"
              color="#fff"
            />
          </View>
          <View className="cnt-text" style={{ color: "#0081ff", width: "70%" }}>
            {customFormatTime(dataList.createTime, "Y.M.D")}
          </View>
        </View>
      </View>
      <View className="postcard-centent">
        <htmltowxml
          linenums={false}
          showLoading={false}
          text={dataList.originalContent}
          highlightStyle="dracula"
          type="md"
        ></htmltowxml>
      </View>
    </View>
  );
}
