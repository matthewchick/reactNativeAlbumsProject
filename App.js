/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 // It is a root component
 // Import a library to help create a Component
 import React from 'react';
 import { AppRegistry } from 'react-native'; //deconstruct
 import Header from './src/components/header';
 // import { Header } from './src/components/header';

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

/*
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
