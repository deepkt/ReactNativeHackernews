import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class menu extends Component {
  // Render home menu
  render() {
    return (
      <TouchableHighlight style={styles.settingsButton} onPress={Actions.settings}>
        <Text style={styles.settingsText}>
          Settings
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  settingsButton: {
    position: 'absolute',
    right: 10,
    top: 80
  },
  settingsText: {
    textAlign: 'right',
    color: '#333333'
  }
});

AppRegistry.registerComponent('menu', () => menu);
