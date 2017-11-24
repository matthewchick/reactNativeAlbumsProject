import React, { Component } from 'react';
import { Text, View } from 'react-native';

/* functional Component
const AlbumList = () => {
  return (
    <View>
      <Text>Album List !!!</Text>
    </View>
  );
}; */
// class Component
class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>Album List !!!</Text>
      </View>
    );
  }
}

export default AlbumList;
