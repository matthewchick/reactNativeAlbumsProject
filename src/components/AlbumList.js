import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
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
  //pass each album object to AlbumDetail.js
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} albumdata={album} />
    );
  }
  render() {
    console.log('State: ', this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
export default AlbumList;
