import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

/* functional Component
const AlbumList = () => {
  return (
    <View>
      <Text>Album List !!!</Text>
    </View>
  );
};
*/
// class Component
class AlbumList extends Component {
  state = { albums: [] };     //step 1: array of emptyObject

  //lifecycle -> https://reactjs.org/docs/react-component.html
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }
  //map() is similar to forEach function
  renderAlbums() {
    return this.state.albums.map(album =>
      <Text key={album.title}>{album.title}</Text>
    );
  }

  render() {
    console.log('State: ', this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
