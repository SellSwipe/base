'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} = React;

var UserAccountSetupView = React.createClass({

    getInitialState(){
      return {
          searchString: 'help',
      };
    },

    render(){
      return(
        <View style = {styles.container}>
          <Text style={styles.image}>
            Insert image here
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
            LOGIN WITH 
          </Text>
          <Text style={styles.facebook}>
            Insert Facebook Logo
          </Text>
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
      left: 40,
      width: 334,
      height: 30,
      top: 430,
      color: 'white',
      paddingLeft: 125,
  },
  facebook: {
    position: 'absolute',
    left: 132, 
    width: 150,
    height: 100,
    top: 480,
    backgroundColor: '#104e8b',
    padding: 10, 
    paddingTop: 30,
    borderColor: 'black',
    borderWidth: 4,
  },
});

module.exports = UserAccountSetupView;
