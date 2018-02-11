import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'
import Util from '../../utils/util'

export default class extends Component{
  constructor(props){
    super(props);
  }
  render () {
    const props = this.props;
    let child = props.children;
    if (props.title) {
      child = [
        <Text style={styles.name} key="t1">{props.title}</Text>,
        <Text style={styles.price} key="t2">{props.price}</Text>,
        <Text style={[styles.grayTxt, {borderRightWidth: 0}]} key="t3">{props.grayTxt}</Text>
      ];
    }
    return (
      <View style={styles.box}>
        {child}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex:1,
    // width: Util.size.width/3,
    // height:100,
    flexDirection: 'column',
    alignItems: 'center',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: "#ddd",
  },
  name: {
    fontSize:12,
  },
  price: {
    fontSize:16,
    fontWeight: 'bold',
    color: '#0D9737',
    marginVertical: 5,
  },
  grayTxt: {
    fontSize: 10,
    color: '#9CA0AB'
  }
});