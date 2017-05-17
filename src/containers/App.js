'use strict'

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import { NavigationProvider, StackNavigation, withNavigation } from '@expo/ex-navigation';

import styles from 'src/common/styles';
//import AppWithNavigationState, {UnAuthorizedApp} from './AppNavigator';
import Router from 'src/navigation/Router';

//@withNavigation
export default class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			 <View style={styles.common.container}>
				<StackNavigation
				id="root"
				defaultRouteConfig={{navigationBar: { backgroundColor: '#0084FF',tintColor: '#FFEB3B',}}}
				initialRoute={Router.getRoute('diningTable')}
				/>
			</View>
		);
	}
}




//export default App;