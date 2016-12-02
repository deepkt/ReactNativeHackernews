import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

// Story Service Client
import storyService from '../../service/story';

export default class helloworld extends Component {

  componentDidMount() {
    const that = this;
    storyService.getNewStories()
      .then((result) => {
        console.log('result2');
        console.log(typeof(result));
        that.setState({
          stories: result,
          loaded: true
        });
      })
      .catch((error) => {
        console.log('Request failed', error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Hackernews!
        </Text>

        <TouchableHighlight style={styles.settingsButton} onPress={Actions.settings}>
          <Text style={styles.settingsText}>
            Settings
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
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

AppRegistry.registerComponent('helloworld', () => helloworld);
