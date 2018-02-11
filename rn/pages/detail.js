import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar
} from 'react-native'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Util from '../utils/util'

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />);
const myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
    Login with Facebook
  </Icon.Button>
);

export default class Detail extends Component {
  static navigationOptions = {
    headerTitle: 'Detail',
    headerRight: <Button title="Right Button"/>,
    headerStyle: {backgroundColor: 'black'},
    headerTintColor: "#fff"
  }

  render () {
    const {state} = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content"/>
        <Text>我是详情页</Text>
        {myIcon}{myButton}
        <Text>{state.routeName}</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Back to Home"
          color="#841584"
      />
     
      </View>
    )
  }
}
