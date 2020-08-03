import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtSearchBar } from "taro-ui";
import userApi from "../../api/user";
import "./index.scss";
export default function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const param = {
    keyword: searchValue,
  };
  const onChange = (e) => {
    setSearchValue(e);
  };
  const onActionClick = (e) => {
    userApi.posts(param).then((res) => {
      props.colors(res);
      props.setDataList(res.content);
      props.setCurrent("false");
    });
  };
  const onClear = (e) => {
    userApi.posts({ keyword: "" }).then((res) => {
      props.colors(res);
      props.setDataList(res.content);
    });
  };
  return (
    <View className="search">
      <AtSearchBar
        actionName="搜索"
        showActionButton={true}
        value={searchValue}
        placeholder="请输入关键词"
        onChange={(e) => onChange(e)}
        onActionClick={(e) => onActionClick(e)}
        // onClear={(e) => onClear(e)}
      />
    </View>
  );
}
