'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    margin: 10,
  },
  text: {
    color: 'black',
     backgroundColor: 'white',
     fontSize: 30,
     margin: 80
  },
});



var LogoSplashView = React.createClass({
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.welcome}>
        	SellSwipe Logo Here
        </Text>
      </View> 
    );
  }
});

module.exports = LogoSplashView;