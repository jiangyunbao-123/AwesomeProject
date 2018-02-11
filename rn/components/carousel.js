import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'

const { width } = Dimensions.get('window');

export default class extends Component {
  static propTypes = {
    index: PropTypes.number,
    children: PropTypes.node.isRequired,
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool,
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]), 
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    showPagination: PropTypes.bool,
    autoplayTimeout: PropTypes.number,
    dotStyle: PropTypes.object,
    dotActiveStyle: PropTypes.object,
  };

  static defaultProps = {
    autoPlay: true,
    index: 0,
    loop: true,
    showPagination: true,
    autoplayTimeout: 3,
  }

  constructor(props) {
    super(props);
    this.state = {
      index: props.index || 0,
      loopJump: false,
      offset: {
        x: (props.loop ? 1 : 0 + (props.index || 0)) * width,
        y:0
      },
    };
    this.autoplayTimer = null;
    this._scrollView = null;
    this._total = props.children ?  props.children.length : 0;
    this.onScrollBegin = this.onScrollBegin.bind(this);
    this.onScrollEnd = this.onScrollEnd.bind(this);
    this.onScrollEndDrag = this.onScrollEndDrag.bind(this);
  }

  componentDidMount () {
    this.autoplay();
  } 

  componentWillUnmount () {
    this.autoplayTimer && clearTimeout(this.autoplayTimer)
    this.loopJumpTimer && clearTimeout(this.loopJumpTimer)
  }

  onScrollBegin (e) {
    // update scroll state
    this.isScrolling = true;
    // this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e, this.state, this);
  }

  onScrollEndDrag (e) {
    const { contentOffset } = e.nativeEvent;
    const { index, offset } = this.state;
    const { children } = this.props
    if (offset.x === contentOffset.x &&
      (index === 0 || index === children.length - 1)) {
      this.isScrolling = false;
    }
  }

  onScrollEnd (e) {
    this.isScrolling = false;
     // making our events coming from android compatible to updateIndex logic
     if (!e.nativeEvent.contentOffset) {
      e.nativeEvent.contentOffset = {x: e.nativeEvent.position * width}
    }
    this.updateIndex(e.nativeEvent.contentOffset, () => {
      console.log('comein updateindex callback;');
      this.autoplay()
      // this.loopJump()
      // if `onMomentumScrollEnd` registered will be called here
      // this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e, this.state, this);
    })
  }

  loopJump () {
    if (!this.state.loopJump) return
    const i = this.state.index + (this.props.loop ? 1 : 0)
    const scrollView = this._scrollView

    this.loopJumpTimer = setTimeout(() => scrollView.setPageWithoutAnimation &&
      scrollView.setPageWithoutAnimation(i), 50)
  }

  autoplay () {
    const {autoPlay, children, loop} = this.props;
    if (!Array.isArray(this.props.children) ||
      !autoPlay || this.state.index === this._total - 1 && !loop) return
    this.autoplayTimer && clearTimeout(this.autoplayTimer)
    this.autoplayTimer = setTimeout(() => {
       this.scrollBy(1);
    }, this.props.autoplayTimeout * 1000)
  }

  scrollBy (num) {
    const {index} = this.state;
    const x = ((this.props.loop ? 1 : 0) + index + num ) * width;
    this.isScrolling = true
    this._scrollView.scrollTo({x:x, y:0});
  }

  updateIndex (offset, callback) {
    const newState = {};
    const loop = this.props.loop;
    let index = parseInt(offset.x / width);
    let loopJump = false;
    newState.offset = {
      x: index * width,
      y: offset.y
    };
    // 循环
    if (loop) {
      if (index <= 0) {
        index = this._total - 1;
        loopJump = true;
      } else if (index >= this._total + 1) {
        index = 0
        loopJump = true;
      } else {
        index -= 1;
      }
      newState.offset.x = (index + 1) * width;
    }
   
    newState.loopJump = loopJump;
    newState.index = index;
    // console.log('newState.offset.x:' + newState.offset.x + "newState.index:" + newState.index);
    this.setState(newState, callback);
  }

  _renderScrollView () {
    const {children, loop} = this.props;
    let pages;
    if (this._total > 1) {
      pages = Object.keys(children);
      if (loop) {
        pages.unshift(this._total - 1 + '');
        pages.push('0');
      }
      pages = pages.map((page, i) => {
        return <View style={styles.view} key={i}>{children[page]}</View>
      });
    } else {
      pages = <View style={styles.view} key={0}>{children}</View>
    }
    // console.log("render offsetX" + this.state.offset.x);
    return (
      <ScrollView style={styles.scrollView}
        automaticallyAdjustContentInsets={false}
        horizontal={true}
        pagingEnabled={true}
        contentOffset={this.state.offset}
        ref={(scrollView) => {this._scrollView = scrollView;}}
        scrollEventThrottle={200}
        onScrollBeginDrag={this.onScrollBegin}
        onMomentumScrollEnd={this.onScrollEnd}
        onScrollEndDrag={this.onScrollEndDrag}>
        {pages}
      </ScrollView>
    );
  }

  _renderPagenation () {
    let pg = [];
    if (this._total <= 1) return;
    // console.log(this.state.index);
    for (var i=0; i<this._total; i++){
      if (this.state.index === i) {
        pg.push(<View style={[styles.circleSelected, this.props.dotActiveStyle]} key={i}/>);
      }else{
        pg.push(<View style={[styles.circle, this.props.dotStyle]} key={i}/>);
      }
    }
    return (
      <View style={styles.circleWrap}>
       {pg}
      </View>
    );
  }

  render () {
    const {showPagination, index} = this.props;
    return (
      <View style={styles.scrollWrap}>
        {this._renderScrollView()}
        {showPagination && this._renderPagenation()}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scrollWrap: {
    // flex:1,
    backgroundColor:'transparent',
    position: 'relative',
  },
  scrollView: {
    // height:150,
    // flex:1,
    backgroundColor:'#fff',
  },
  circleWrap: {
    position: 'absolute',
    bottom:10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  circle: {
    width:6,
    height:6,
    borderRadius:6,
    backgroundColor:'#ffffff',
    marginHorizontal:5,
  },
  circleSelected: {
    width:6,
    height:6,
    borderRadius:6,
    backgroundColor:'#f4797e',
    marginHorizontal:5,
  }
});