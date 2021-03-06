/*
 * 
 *  SellSwipe Root
 *
 */
'use strict';

var React = require('react-native');
var LogoSplashView = require('./LogoSplashView');
var IntroductionView = require('./IntroductionView');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({         
  container: {
    flex: 1,
  },
});


var SellSwipe = React.createClass({
  render() {
    return (
      <React.NavigatorIOS  
        style = {styles.container}
        initialRoute = {{
          navigationBarHidden: true, 
          title: 'SellSwipe', 
          component: LogoSplashView,
      }}/>

    );
  }
});    



AppRegistry.registerComponent('SellSwipe', () => SellSwipe);

module.exports = SellSwipe;
