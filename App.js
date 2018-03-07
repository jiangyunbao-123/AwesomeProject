import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Iconfont from 'react-native-vector-icons/FontAwesome';
import Index from './rn/pages/home';
import Detail from './rn/pages/detail';
import Icon from './rn/utils/images';
import Bopage from './rn/pages/bo';
import Mepage from './rn/pages/me';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width:30,
    height:30,
  },
  tabContent: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      height:2000
  },
  tabText: {
    color: 'black',
    margin: 20,
  },
});

 const BoScreen = () => {
    return (
      <View style={[styles.tabContent]}>
        <Text style={styles.tabText}>{this.props}其他页面</Text>
        <Text style={styles.tabText}>父节点是View的Text节点展示一</Text>
        <Text numberOfLines={3} ellipsizeMode="head">
          <Text>父节点是Text的Text节点展示一</Text>
          <Text>父节点是Text的Text节点展示二父节点是Text的Text节点展示二父节点是Text的Text节点展示二父节点是Text的Text节点展示二</Text>
        </Text>
      </View>
    );
  }


const RootTabs = TabNavigator({
  Home: {
    screen: Index,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Iconfont name="home" size={20} color={tintColor}/>
        // <Image
        //   source={{uri: Icon.indexIcon}}
        //   style={{width:25, height:25,tintColor: tintColor}}
        // />
      ),
    },
  },
  boTab: {
    screen: Bopage,
    navigationOptions: {
      tabBarLabel: '直播',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri: Icon.boIcon}}
          style={{width:26, height:26,tintColor: tintColor}}
        />
      ),
    },
  },
  transactionTab:{
    screen: BoScreen,
    navigationOptions: {
      tabBarLabel: '交易',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri: Icon.loadIcon}}
          style={{width:15,height:15,tintColor: tintColor}}
        />
      ),
    },
  },
  selfSelTab:{
    screen: BoScreen,
    navigationOptions: {
      tabBarLabel: '自选',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri: Icon.shanIcon}}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  meTab:{
    screen: Mepage,
    navigationOptions: {
      // tabBarVisible: false,  //隐藏tabbar
      tabBarLabel: '我',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri: Icon.meIcon}}
          style={{width:20,height:20,tintColor: tintColor}}
        />
      ),
    },
  }  
}, {
  // animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e90c0c',
    activeBackgroundColor: '#d9edf8',
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    style: {
      backgroundColor: '#fff',
    },
    tabStyle: {
      borderRadius: 5,
      marginVertical: 2,
      marginHorizontal:3,
      paddingBottom:2,
    }
  },
});

const Navigator = StackNavigator(   
  {  
    Home:{ 
      screen: RootTabs,
      navigationOptions: {
        header:null  //隐藏头部导航
      }
    },  
    Detail:{
      screen: Detail,
    },
  },  
  {  
    navigationOptions:{  
      headerBackTitle: null,  
      headerTintColor:'#333333',  
      showIcon:false,  
     swipeEnabled:true,  
     animationEnabled:true,  
    },  
    headerMode: "float",
    mode:'card', 
    // initialRouteName: "Detail"
  });

export default Navigator;
