var React = require('react-native');

var {
	AppRegistry,
  	StyleSheet,
  	Text,
  	View,
  	TouchableHighlight,
} = React;

var InboxView = React.createClass({

	getInitialState(){
		return {
			searchString: 'help',
		};
	},
  
  render() {
    return (
      	<View style = {styles.container}>
        	<TouchableHighlight style={styles.container}>
        		<Text style = {styles.logoText} >
              TODO : User Inbox
            </Text>
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
    backgroundColor: '#FFFFFF',
  },
  logoText: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    margin: 10,
    alignItems: 'center',
  },
});

module.exports = InboxView;