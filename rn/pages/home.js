import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  RefreshControl,
  TouchableWithoutFeedback
} from 'react-native'

import Util from '../utils/util'
import Carousel from '../components/carousel'
import DateFormat from '../utils/dateformat';

import SlideTextPage from './home/slideTextPage'
import MidNav from './home/midNav'
import Ad from './home/ad'
import List from './home/list'

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isRefresh: false,
      freshTime: DateFormat.format(new Date(), "YYYY-MM-DD HH:ss")
    }
  }

  _onRefresh () {
    this.setState({isRefresh: true});
  }

  render () {
    return (
      <ScrollView style={{flex:1, position:'relative'}}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefresh}
            onRefresh={() => this._onRefresh}
            tintColor="#aaa"
            title={"最后更新 今天" + this.state.freshTime}
            titleColor="#aaa"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }
      >
          <Text style={styles.headTitle}>易龙智投</Text>
          <Carousel loop={true} index={0} height={150}>
            <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('Detail')}}>
              <Image style={styles.img} source={require('../images/ban1.jpg')} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('Detail')}}>
            <Image style={styles.img} source={require('../images/ban2.jpg')} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('Detail')}}>
            <Image style={styles.img} source={require('../images/ban3.jpg')} />
            </TouchableWithoutFeedback>
          </Carousel>
          <Carousel loop={false} index={0} height={180} autoPlay={false} dotActiveStyle={styles.dotActiveStyle} dotStyle={styles.dotStyle}>
            <SlideTextPage></SlideTextPage>
            <SlideTextPage isLast={true}></SlideTextPage>
          </Carousel>
          <MidNav></MidNav>
          <Ad/>
          <List/>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  img: {
    width: Util.size.width,
    height: 150,
  },
  headTitle: {
    position: 'absolute',
    width:Util.size.width,
    zIndex: 10,
    color: '#fff',
    top: 30,
    left:0,
    fontSize: 18,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  dotStyle: {
    backgroundColor: "rgba(0,0,0,.4)"
  },
  dotActiveStyle: {
    backgroundColor: "#000"
  }
});