import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const ListItem = ({listData}) => (
    <View style={styles.itemBox}>
      <View style={styles.imgBox}>
        <Image source={require('../../images/ban1.jpg')} style={styles.icon}/>
      </View>
      <View style={styles.txtBox}>
        <View style={styles.txtTitle}>
          <Text style={styles.grayTxt}>{listData.teacher}</Text>
          <Text style={styles.grayTxt}>{listData.time}</Text>
        </View>
        <Text style={styles.content}>{listData.content}</Text>
      </View>
    </View>
);

const lists = [
  {
    teacher: "刘思源（金牌分析师）",
    time: "12分钟前",
    content: "采用最先进和稳定的桥接器、价格整合器，执行速度快至0.01秒。STP无交易员平台执行模式，直接获得全球顶尖16间银行的银行间精准报价。",
  },
  {
    teacher: "李飞鱼（自身分析师）",
    time: "1小时前",
    content: "国际正规投资贵金属交易官网 交易平台 支持全球外汇 贵金属 股票 黄金 白银等130种交易品种福瑞斯是一家知名环球交易服务供应商 20年始终如一地经营自己的诚信品牌。",
  },
  {
    teacher: "李飞鱼（自身分析师）",
    time: "1.5小时前",
    content: "采用最先进和稳定的桥接器、价格整合器，执行速度快至0.01秒。STP无交易员平台执行模式，直接获得全球顶尖16间银行的银行间精准报价。",
  }
];
export default class extends Component{
  render () {
    let listHtml;
    listHtml = lists.map((list, i) => {
      return <ListItem listData={list}/>
    });
    return (
      <View style={styles.listBox}>
       {listHtml}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listBox: {
    backgroundColor:"#fff",
    flex:1,
  },
  itemBox: {
   flex:1,
   flexDirection: 'row',
   paddingTop: 15,
   paddingHorizontal:15,
  },
  imgBox: {
    width: 20,
    height:20,
    overflow: "hidden",
    borderColor: "#ddd",
    borderRadius: 20,
    marginRight:15,
  },
  txtBox: {
    flex:1
  },
  icon: {
    // flex:1
  },
  txtTitle: {
    justifyContent: "space-between",
    flexDirection: "row",
    height:16,
    marginBottom:5,
  },
  grayTxt: {
    fontSize: 11,
    color: '#9CA0AB'
  },
  content: {
    fontSize:14,
    lineHeight: 24
  }
});