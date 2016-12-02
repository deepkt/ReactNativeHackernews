import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView
} from 'react-native';

import { Actions } from 'react-native-router-flux';

// Story Service Client
import storyService from '../../service/story';
import Menu from './menu';
import StoryListItem from './storyListItem';

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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        that.setState({
          stories: ds.cloneWithRows(result),
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
      <ListView
          style={styles.storylistContainer}
          dataSource={this.state.stories}
          renderRow={(storyId) => <StoryListItem storyId={storyId}/>}
        />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Menu/>
        {(this.state.loaded) ? this.renderNewsList() : this.renderLoadingMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  storylistContainer: {
    marginTop:100,
    flex: 1,
    flexDirection: 'column',
  }
});

AppRegistry.registerComponent('index', () => index);
