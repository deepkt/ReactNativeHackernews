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

export default class storyListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  };

  componentDidMount() {
    const that = this;
    storyService.getNewsItem(this.props.storyId)
      .then((newsItem) => {
        console.log('newsItem');
        console.log(newsItem);
        that.setState({
          story: newsItem,
          loaded: true
        });
      })
      .catch((error) => {
        console.log('Request failed', error);
      });
  };

  // Render news item
  renderNewsItem() {
    return (
      <TouchableHighlight style={styles.settingsButton} onPress={Actions.settings}>
        <Text style={styles.settingsText}>
          {this.state.story.title}
        </Text>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      this.state.loaded ? this.renderNewsItem() : null
    );
  }
}

const styles = StyleSheet.create({
  settingsButton: {
    // height:'auto',
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
