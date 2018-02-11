import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native'

import Util from '../../utils/util'
import Icon from '../../utils/images';

const NavItem = ({text, src}) => (
  <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
    <View style={styles.iconBg}>
      <Image source={{uri:src}} style={styles.icon}/>
    </View>
    <Text>{text}</Text>
  </View>
);

export default class extends Component{
  constructor(props){
    super(props);
  }
  render () {
    return (
      <View style={styles.box}>
        <NavItem text="财经日历" src={Icon.calIcon}></NavItem>
        <NavItem text="24h快讯" src={Icon.calIcon}></NavItem>
        <NavItem text="新人必读" src={Icon.zcIcon}></NavItem>
        <NavItem text="咨询客服" src={Icon.zxIcon}></NavItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
   height:100,
   backgroundColor: "#fff",
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: "center",
   marginVertical: 10,
  },
  iconBg: {
    borderRadius: 34,
    width: 34,
    height: 34,
    marginVertical:5,
    backgroundColor: "#9da8be",
    borderColor: "#8791a8",
    justifyContent: 'center',
    alignItems: "center",
  },
  icon: {
    width:18,
    height:18,
    tintColor: "#fff"
  }
});