'use strict';

import React, {Component} from 'react';
import {
  View,Text,
  Dimensions,
  DeviceEventEmitter,
  StatusBar
} from 'react-native';
import { AppLoading, Font,Asset } from 'expo';
import { NavigationProvider, StackNavigation, withNavigation } from '@expo/ex-navigation';
//import { Provider as ReduxProvider, connect } from 'react-redux';


//import configureStore from 'src/data/store';
import styles from 'src/common/styles';
import{
  TABLE,VISA, USER1, USER2, USER3, USER4
} from 'src/common/Images';

import Router from 'src/navigation/Router';
import App from './App';

class Root extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated:false,
        loaded: false,
      };
  }
  componentWillMount() {
    this._loadAssetsAsync();
  }
  _loadAssetsAsync = async () => {
    const images = [TABLE,VISA, USER1, USER2, USER3, USER4];
    for(let image of images) {
      await Asset.fromModule(image).downloadAsync();
    }
    this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
      return (
          <NavigationProvider router={Router}>
            <StatusBar barStyle="light-content" />
            <App {...this.props} />
          </NavigationProvider>
      );
  }
}
export default Root;