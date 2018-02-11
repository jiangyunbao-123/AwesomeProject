import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'

export default class extends Component{
  render () {
    return (
      <View style={styles.box}>
       <Image source={require('../../images/ad.jpg')} style={styles.image} resizeMode="cover" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
   backgroundColor: "#fff",
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: "center",
   marginBottom: 10,
   paddingVertical: 10,
   paddingHorizontal:15,
  },
  image: {
    flex:1
  }
});