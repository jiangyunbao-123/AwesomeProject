import React, { Component } from 'react'
import {
  Text,
  Image,
  View,
  StyleSheet,
  Button,
  ScrollView,
  StatusBar
} from 'react-native'
import Util from '../utils/util'

export default class Bo extends Component {
  render () {
    const {state} = this.props.navigation;
    return (
      <ScrollView style={styles.scrollView}
      >
       <StatusBar barStyle="light-content"/>
      <View style={styles.headTitle}>
        <Text style={styles.headCenter}>直播</Text>
        <Text style={styles.headRight}>节目表</Text>
      </View>
      <View style={styles.imgBox}>
        <Image style={styles.img} source={require('../images/bo1.jpg')}/>
        <View style={styles.mask}>
          <View><Text style={styles.maskTit}>新春计划直播间</Text></View>
          <View><Text style={styles.maskCont}>首席名师联手布局，VIP客户专属通道，享受顶配策略</Text></View>
        </View>
      </View>
      <View style={styles.imgBox}>
        <Image style={styles.img} source={require('../images/bo2.jpg')}/>
        <View style={styles.mask}>
          <View><Text style={styles.maskTit}>盈满天下</Text></View>
          <View><Text style={styles.maskCont}>服务vip投资者，引领走向财富自由！</Text></View>
        </View>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    // height:150,
    backgroundColor:'#2d2a35',
  },
  headTitle: {
    marginTop: 28,
    marginBottom:10,
    position: "relative",
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  headCenter: {
    textAlign: "center",
    color: "#fff",
    fontSize:18
  },
  headRight: {
    position: "absolute",
    top: 0,
    right: 15,
    height:30,
    lineHeight:30,
    textAlign: "right",
    color: "#fff",
    fontSize:12,
    textDecorationLine: "underline"
  },
  imgBox: {
    position: "relative",
    marginBottom:15,
  },
  img: {
    height: 200,
    width: Util.size.width
  },
  mask: {
    position: "absolute",
    bottom:0,
    left:0,
    right:0,
    backgroundColor: "rgba(0,0,0,.7)",
    paddingLeft: 20,
    paddingVertical: 10
  },
  maskTit: {
    fontSize:20,
    color:"#fff",
    marginBottom:5,
  },
  maskCont: {
    fontSize:12,
    color:"#fff"
  }
});
