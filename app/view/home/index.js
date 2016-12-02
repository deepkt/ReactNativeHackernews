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
import Menu from './menu';

export default class index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    const that = this;
    storyService.getNewStories()
      .then((result) => {
        console.log('result');
        console.log(result);
        that.setState({
          stories: result,
          loaded: true
        });
      })
      .catch((error) => {
        console.log('Request failed', error);
      });
  };

  // Loading Message
  renderLoadingMessage() {
    return (
      <Text style={styles.welcome}>
        Hackernews is loading...
      </Text>
    );
  };

  // Loading Message
  renderNewsList() {
    return (
      <Text style={styles.welcome}>
        Hackernews is ready
      </Text>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Menu></Menu>
        {(this.state.loaded) ? this.renderNewsList() : this.renderLoadingMessage()}
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

AppRegistry.registerComponent('index', () => index);
