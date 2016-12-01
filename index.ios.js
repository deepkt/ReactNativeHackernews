import {
  AppRegistry,
  StatusBar,
} from 'react-native';

import Hackernews from './Hackernews';

StatusBar.setBarStyle('dark-content', true);

AppRegistry.registerComponent('ReactNativeHackernews', () => Hackernews);
