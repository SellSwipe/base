'use strict';

var React = require('react-native');
var IntroductionView = require('./IntroductionView');
var {
	AppRegistry,
  	StyleSheet,
  	Text,
  	View,
  	TouchableHighlight,
} = React;

var LogoSplashView = React.createClass({

	getInitialState(){
		return {
			searchString: 'help',
		};
	},

  _onPress(){	
		this.props.navigator.push({
      navigationBarHidden: true,
      component: IntroductionView,
      title: ''
    });
  },
  
  render() {
    return (
      	<View style = {styles.container}>
        	<TouchableHighlight style={styles.container} onPress = {this._onPress}>
        		<Text style = {styles.logoText} >
              SellSwipe Logo Here
            < /Text>
        	</TouchableHighlight>
      	</View> 
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  logoText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    margin: 10,
    alignItems: 'center',
  },
});

module.exports = LogoSplashView;