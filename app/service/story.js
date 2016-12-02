// Base Service Client
import BaseService from './base';

exports.getNewStories = function getNewStories() {
  const url = 'https://hacker-news.firebaseio.com/v0/newstories.json';
  return BaseService(url)
    .then((responseJson) => {
        return responseJson;
    });
};
