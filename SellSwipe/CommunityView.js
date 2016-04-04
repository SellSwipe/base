'use strict';

var React = require('react-native');
var TimelineView = require('./TimelineView');
var PostItemForSaleView = require('./PostItemForSaleView');
var VaultView = require('./VaultView');
var InboxView = require('./InboxView');
var SearchView = require('./SearchView');



var {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  TabBarIOSItem,
  Image,
  TextInput,
  ListView,
  SliderIOS,
  View,
  TouchableHighlight,
} = React;

var TEST_ITEM_DATA = [{title: 'Test Item One', image: './facebookLogo.jpg'}, 
					  {title: 'Test Item Two', image: './facebookLogo.jpg'},
					  {title: 'Test Item Three', image: './facebookLogo.jpg'}, 
					  {title: 'Test Item Four', image: './facebookLogo.jpg'}
					 ];


var CommunityView = React.createClass({

	getInitialState(){
		var ds = new ListView.DataSource({
      			rowHasChanged: (r1, r2) => r1 !== r2
		});
    	return {
       		searchString: '',
      		value: 0,
      		dataSource: ds.cloneWithRows(TEST_ITEM_DATA),
      		selectedTab: 'SearchView',
    	};
  	},

  	renderItem(item){
  	  		return(
  			<TouchableHighlight underlayColor = '#dddddd'>
  				<View style={styles.listContainer}>
  					
  					<Image source ={{uri: item.image, isStatic: true}} style={styles.image}>
  					</Image>
  					<Text style={styles.title}>
  						{item.title}
  					</Text>
  				</View>
  			</TouchableHighlight>
  			)
  	},

  	_onPress(tabNum){	
  		switch(tabNum){
  			case 1:
  				this.props.navigator.push({
      			navigationBarHidden: true,
     		    component: PostItemForSaleView,
      			title: ''
      			});
  				break;
  			case 2: 
  				this.props.navigator.push({
      			navigationBarHidden: true,
     		    component: VaultView,
      			title: ''
      			});
  				break;
  			case 3: 
  				this.props.navigator.push({
      			navigationBarHidden: true,
     		    component: InboxView,
      			title: ''
      			});
  				break;
  			case 4: 
  				this.props.navigator.push({
      			navigationBarHidden: true,
     		    component: TimelineView,
      			title: ''
      			});
  				break;
  			default: 
  				this.props.navigator.push({
      			navigationBarHidden: true,
     		    component: SearchView,
      			title: ''
      			});

  		}
  	},

 
 
  	render(){
 		
  		
  		return(

  			<View style = {styles.container}>
  				<TextInput style={styles.searchBar} onChangeText = {(searchString) => this.setState({searchString})} 
  								  value = {this.state.searchString} placeholder = {'SEARCH'}>
  				</TextInput>

  				<Text style={styles.sliderText}>
  					Proximity: {this.state.value} miles
   				</Text>

  				<SliderIOS style={styles.slider} onValueChange={(value) => this.setState({value: value})}
  												 maximumValue={20} step={1}>
  				</SliderIOS>
  				<ListView dataSource={this.state.dataSource} renderRow={this.renderItem} style={styles.featured} onEndReachedThreshold={10}>
  				</ListView>
  				<Text style={styles.nearby}>
  					WITHIN {this.state.value} MILES
  				</Text>
  				<Text style={styles.trending}>
  					TRENDING
  				</Text>
  				<TabBarIOS selectedTab={this.state.selectedTab}>
	  				<TabBarIOS.Item selected={this.state.selectedTab === 'SearchView'}
	  								onPress={this._onPress(0)}>
	  								<SearchView/>
	  				</TabBarIOS.Item>
	  				<TabBarIOS.Item selected={this.state.selectedTab === 'PostItemForSaleView'}
	  								onPress={this._onPress(1)}>
	  								<PostItemForSaleView/>
	  				</TabBarIOS.Item>
	  				<TabBarIOS.Item selected={this.state.selectedTab === 'VaultView'}
	  								onPress={this._onPress(2)}>
	  								<VaultView/>
	  				</TabBarIOS.Item>
	  				<TabBarIOS.Item selected={this.state.selectedTab === 'InboxView'}
	  								onPress={this._onPress(3)}>
	  								<InboxView/>
	  				</TabBarIOS.Item>
	  				<TabBarIOS.Item selected={this.state.selectedTab === 'TimelineView'}
	  								onPress={this._onPress(4)}>
	  								<TimelineView/>
	  				</TabBarIOS.Item>
  				</TabBarIOS>

	  			
  				
        	</View>
        );
  	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#104e8b',
		padding: 10,
	},
	searchBar: {
		position: 'absolute',
    	left: 60,
    	width: 294,
    	height: 30,
    	top: 40,
    	paddingLeft: 10,
		backgroundColor: 'white',
		borderColor: 'gray',
		borderWidth: 2,
	},
	sliderText: {
		position: 'absolute',
		left: 140, 
		top: 80,
		color: 'white',
	},
	slider: {
		position: 'absolute',
		left: 40, 
		width: 334,
		height: 10,
		top: 120,
	},
	separator: {
    	height: 1,
    	backgroundColor: '#dddddd',
  	},
  	listView: {
  		flexDirection: 'row',
  		backgroundColor: 'white',
  	},
  	listContainer: {
  		flex: 1,
  		flexDirection: 'row',
  		justifyContent: 'center',
  		alignItems: 'center',
  		backgroundColor: '#F5FCFF',
  		padding: 10,
  	},
  	title: {
  		fontSize: 14,
  		flex: 1, 
  	},
  	author: {
  		fontSize: 14,
  	},
  	image: {
  		flex: 1, 
  		height: 20, 
  		width: 20, 
  		marginRight: 10,
  	},
	featured: {
		position: 'absolute',
		left: 40, 
		width: 157,
		height: 110,
		top: 160,
		backgroundColor: 'white',
		flex: 1,
  		flexDirection: 'row',
  		padding: 0,
	},
	nearby: {
		position: 'absolute',
		left: 217, 
		width: 157,
		height: 110,
		top: 160,
		backgroundColor: 'white',
		padding: 40, 
		paddingTop: 40,
	},
	trending: {
		position: 'absolute',
		left: 40, 
		width: 334,
		height: 310,
		top: 300,
		backgroundColor: 'white',
		padding: 120, 
		paddingTop: 150,
	},


});

module.exports = CommunityView;
