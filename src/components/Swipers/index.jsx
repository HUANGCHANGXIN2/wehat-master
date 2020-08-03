import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import "./index.scss";
import { customFormatTime } from "../../utils"
export default function Swipers(props) {
  const [swiperList, setSwiperList] = useState([]);
  useEffect(() => {
    if (props.getHomeList) {
      setSwiperList(props.getHomeList);
    }
  });
  const toPost = (e) =>{
    if (e) {
      // const {title,content} = e
      Taro.navigateTo({url:`/pages/post/post?id=${e.id}`})
    }
  }
  return (
    <View>
      <Swiper
        className="swiper"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        // vertical
        circular
        // indicatorDots
        autoplay
        interval="5000"
      >
        {swiperList.map((item) => (
          <SwiperItem key={item.id} onClick={()=>toPost(item)}>
            <View className="swiper-img" style={{background:item.thumbnail?`url(${item.thumbnail}) center center no-repeat`:'#ededed',backgroundSize:"100%"}}>
              {/* <View  style={{background:item.thumbnail?`url(${item.thumbnail})`:'#ededed'}} alt="" className="img" /> */}
              <View className="content">
                  <View className="title">{item.title}</View>
                  <View className="time">{customFormatTime(item.createTime,'Y.M.D')}</View>
              </View>
            </View>
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
}
