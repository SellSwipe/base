'use strict';

var React = require('react-native');
var CommunityView = require('./CommunityView');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
} = React;

var UserAccountSetupView = React.createClass({

    getInitialState(){
      return {
          searchString: 'help',
      };
    },
    _onPressFacebook(){ 
      this.props.navigator.push({
          navigationBarHidden: true,
          component: CommunityView,
          title: ''
      });
  },

    render(){
      return(
        <View style = {styles.container}>
          <Text style={styles.image}>
            Insert Profile Picture
          </Text>
          <TextInput style={styles.name} onChangeText = {(nameText) => this.setState({nameText})} 
                    value = {this.state.nameText} placeholder = {'NAME'}>
          </TextInput>
          <TextInput style={styles.email} onChangeText = {(emailText) => this.setState({emailText})} 
                    value = {this.state.emailText} placeholder = {'E-MAIL'}>
          </TextInput>
          <TextInput style={styles.username} onChangeText = {(usernameText) => this.setState({usernameText})} 
                    value = {this.state.usernameText} placeholder = {'USERNAME'}>
          </TextInput>
          <TextInput style={styles.password} onChangeText = {(passwordText) => this.setState({passwordText})} 
                    value = {this.state.passwordText} placeholder = {'PASSWORD'}>
          </TextInput>
          <Text style={styles.optional}>
            Register With Facebook 
          </Text>
          <Image source={require('./facebookLogo.jpg')} style={styles.facebook}> 
          </Image>
        </View>
      );
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#104e8b',
  },
  image: {
    position: 'absolute',
    left: 40, 
    width: 100,
    height: 100,
    top: 120,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10, 
    paddingTop: 30,
  },
  name: {
    position: 'absolute',
      left: 160,
      width: 214,
      height: 30,
      top: 180,
      paddingLeft: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
  },
  email: {
    position: 'absolute',
      left: 40,
      width: 334,
      height: 30,
      top: 250,
      paddingLeft: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
  },
  username: {
    position: 'absolute',
      left: 40,
      width: 334,
      height: 30,
      top: 300,
      paddingLeft: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
  },
  password: {
    position: 'absolute',
      left: 40,
      width: 334,
      height: 30,
      top: 350,
      paddingLeft: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
  },
  optional: {
    position: 'absolute',
      height: 30,
      top: 430,
      color: 'white',
      paddingLeft: 135,
      textAlign: 'center',
  },
  facebook: {
    position: 'absolute',
    left: 157, 
    width: 100,
    height: 100,
    top: 480,
    borderColor: 'black',
  },
  facebookClick: {
    position: 'absolute',
    left: 132, 
    width: 150,
    height: 100,
    top: 480,
    borderColor: 'black',
    borderWidth: 2,
  },
});

module.exports = UserAccountSetupView;
