'use strict';

var React = require('react-native');
var BusinessAccountSetupView = require('./BusinessAccountSetupView');
var UserAccountSetupView = require('./UserAccountSetupView');
var CommunityView = require('./CommunityView');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var IntroductionView = React.createClass({
  
  getInitialState(){
    return {
      searchString: 'help',
    };
  },

  _onPressBusiness(){ 
      this.props.navigator.push({
          navigationBarHidden: false,
          component: BusinessAccountSetupView,
          title: ''
      });
  },

  _onPressUser(){ 
      this.props.navigator.push({
          navigationBarHidden: false,
          component: UserAccountSetupView,
          title: ''
      });
  },

  _onPressSkip(){ 
      this.props.navigator.push({
          navigationBarHidden: true,
          component: CommunityView,
          title: ''
      });
  },

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.mockWelcome}>
        	How it Works....
        </Text>
        <Text style = {styles.mockIndicators}>
          .  .  .  .
        </Text>
        <TouchableHighlight style = {styles.businessLogin} onPress = {this._onPressBusiness}>
          <Text style = {styles.businessLoginText}>
            - Create Business Account
          </Text>
        </TouchableHighlight>
        
        <TouchableHighlight style = {styles.individualLogin} onPress = {this._onPressUser}>
          <Text style = {styles.individualLoginText}>
            - Create Individual Account
          </Text>
        </TouchableHighlight>
        
        <TouchableHighlight style = {styles.skipLogin} onPress = {this._onPressSkip}>
          <Text style = {styles.skipLoginText}>
            Continue to SellSwipe
          </Text>
        </TouchableHighlight>
      </View> 
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#104e8b',
  },
  mockWelcome: {
    position: 'absolute',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    paddingTop: 130,
    backgroundColor: '#000000',
    top: 50,
    left: 57,
    width: 300,
    height: 300,
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  mockIndicators: {
    position: 'absolute',
    color: 'white',
    fontSize: 60,
    textAlign: 'center',
    top: 360,
    width: 200,
    left: 107,
  },
  businessLogin: {
    position: 'absolute',
    flex: 1,
    left: 40,
    top: 490,
    backfaceVisibility: 'hidden',
  },
  businessLoginText: {
    textAlign: 'left',
    fontSize: 20,
    color: 'white',
  },
  individualLogin: {
    position: 'absolute',
    flex: 1,
    left: 40,
    top: 560,
    backfaceVisibility: 'hidden',
  },
  individualLoginText: {
    textAlign: 'left',
    fontSize: 20,
    color: 'white',
  },
  skipLogin: {
    position: 'absolute',
    flex: 1,
    top: 650,
    left: 107,
    width: 200,
    backfaceVisibility: 'hidden',
  },
  skipLoginText: {
    textAlign: 'center',
    fontSize: 15, 
    color: 'white',
  }
});

module.exports = IntroductionView;