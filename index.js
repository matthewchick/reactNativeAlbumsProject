/* import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('album', () => App); */

// It is a root component
// Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native'; //deconstruct
import Header from './src/components/header';

// Create a Component
/* const App = () => {      javacript es6
  return <Text>Some Text</Text>;
};
const App = function App() {    javascript
  return <Text>Some Text</Text>;
}
*/
// functional or non-stateless components
const App = () => <Header />;

// Render it to the device
// Only root component uses 'AppRegistry'
AppRegistry.registerComponent('album', () => App);
