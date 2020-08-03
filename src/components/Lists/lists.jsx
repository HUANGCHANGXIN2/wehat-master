import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

export default function HomeList(props) {
  const [list, setlist] = useState([]);
  useEffect(() => {
    if(props.getDataList){
        setlist(props.getDataList);
    }
  });
  const toPost = (e) =>{
    if (e) {
      console.log(e);
      
      // const {title,content} = e
      Taro.navigateTo({url:`/pages/post/post?id=${e.id}`})
    }
  }
  return (
    <View className="homeList" >
      {list.map((item) => (
        <View onClick={()=>toPost(item)} className="listContent " key={item.id} style={{animationDuration:item.listTime,background:item.listBackground,boxShadow: '2px 4px 8px '+item.listBackground}}>
          <View className="title" >{item.title}</View>
        </View>
      ))}
    </View>
  );
}

