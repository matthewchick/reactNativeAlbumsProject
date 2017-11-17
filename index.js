/* import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('album', () => App); */

// Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native'; //deconstruct

// Create a Component
/* const App = () => {
  return <Text>Some Text</Text>;
};
*/
// functional or non-stateless components
const App = () => <Text>Some Text</Text>;

// Render it to the device

AppRegistry.registerComponent('album', () => App);
