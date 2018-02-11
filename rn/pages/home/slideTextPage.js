import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native'
import Util from '../../utils/util'
import SlideTextItem from './slideTextItem'


export default class extends Component{
  render () {
    const { isLast } = this.props;
    return (
      <View style={styles.box}>
        <SlideTextItem title={'太阳能板导电液20g'} price={'4218'} grayTxt={'-6 -0.14%'}></SlideTextItem>
        <SlideTextItem title={'美元指数'} price={'1314.77'} grayTxt={'-5 -0.24%'}></SlideTextItem>
        <SlideTextItem>
          <Text style={styles.all}>查看全部</Text>
          <Text style={styles.more}>see more</Text>
        </SlideTextItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: Util.size.width,
    height: 100,
    flexDirection:'row',
    alignItems: 'center',
  },
  all: {
    fontSize: 14,
  },
  more: {
    fontSize: 10,
    color: '#9CA0AB'
  }
});