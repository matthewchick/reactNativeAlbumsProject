/*
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('album', () => App);
*/
// It is a root/parent component
// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native'; //deconstruct
import Header from './src/components/header';
// import { Header } from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a Component
/* const App = () => {      javacript es6
  return <Text>Some Text</Text>;
};
const App = function App() {    javascript
  return <Text>Some Text</Text>;
}
*/
// functional or non-stateless components
// use props to pass data from parent to child component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
// Only root component uses 'AppRegistry'
AppRegistry.registerComponent('album', () => App);
