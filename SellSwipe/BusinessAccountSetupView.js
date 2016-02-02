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

var BusinessAccountSetupView = React.createClass({

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
  				<TextInput style={styles.businessName} onChangeText = {(businessNameText) => this.setState({businessNameText})} 
  								  value = {this.state.businessNameText} placeholder = {'BUSINESS NAME'}>
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
  					Optional
  				</Text>
  				<TextInput style={styles.address} onChangeText = {(addressText) => this.setState({addressText})} 
  								  value = {this.state.addressText} placeholder = {'BUSINESS ADDRESS'}>
  				</TextInput>
  				<TextInput style={styles.phoneNumber} onChangeText = {(phoneNumberText) => this.setState({phoneNumberText})} 
  								  value = {this.state.phoneNumberText} placeholder = {'BUSINESS PHONE NUMBER'}>
  				</TextInput>
  				<TextInput style={styles.website} onChangeText = {(websiteText) => this.setState({websiteText})} 
  								  value = {this.state.websiteText} placeholder = {'BUSINESS WEBSITE'}>
  				</TextInput>
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
	businessName: {
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
    	paddingLeft: 140,
	},
	address: {
		position: 'absolute',
    	left: 40,
    	width: 334,
    	height: 30,
    	top: 470,
    	paddingLeft: 10,
		backgroundColor: 'white',
		borderColor: 'gray',
		borderWidth: 2,
	},
	phoneNumber: {
		position: 'absolute',
    	left: 40,
    	width: 334,
    	height: 30,
    	top: 520,
    	paddingLeft: 10,
		backgroundColor: 'white',
		borderColor: 'gray',
		borderWidth: 2,
	},
	website: {
		position: 'absolute',
    	left: 40,
    	width: 334,
    	height: 30,
    	top: 570,
    	paddingLeft: 10,
		backgroundColor: 'white',
		borderColor: 'gray',
		borderWidth: 2,
	},
});

module.exports = BusinessAccountSetupView;
