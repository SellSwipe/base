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
  NavigatorIOS,
} = React;

var SellSwipe = React.createClass({
  render() {
    return (
      <NavigatorIOS
          style = {styles.container}
          initialRoute = {{
          navigationBarHidden: true, 
          title: 'SellSwipe', 
          component: LogoSplashView,
      }}/>

    );
  }
});    

var styles = StyleSheet.create({         
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('SellSwipe', () => SellSwipe);

module.exports = SellSwipe;
