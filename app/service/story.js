// Base Service Client
import BaseService from './base';
import _ from 'underscore';

exports.getNewStories = function getNewStories() {
  const url = 'https://hacker-news.firebaseio.com/v0/newstories.json';
  return BaseService(url)
    .then((responseJson) => {
        return _.first(responseJson, 20);;
    });
};

exports.getNewsItem = function getNewsItem(itemId) {
  const url = 'https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json?print=pretty';
  return BaseService(url)
    .then((responseJson) => {
        return responseJson;
    });
};
