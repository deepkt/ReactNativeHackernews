import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class storyListItem extends Component {
  // Render home menu
  render() {
    return (
      <TouchableHighlight style={styles.settingsButton} onPress={Actions.settings}>
        <Text style={styles.settingsText}>
          {this.props.storyId}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  settingsButton: {
    height:50,
    padding: 10,
    borderTopColor: '#CCCCCC',
    borderTopWidth: StyleSheet.hairlineWidth
  },
  settingsText: {
    textAlign: 'left',
    color: '#333333'
  }
});

AppRegistry.registerComponent('storyListItem', () => storyListItem);
