import React, { Component } from 'react';

import {
  AppRegistry
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Home from './app/view/home/index';
import Settings from './app/view/settings/index';


export default class Hackernews extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
          <Scene key="settings" component={Settings} title="Settings" />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('Hackernews', () => Hackernews);
