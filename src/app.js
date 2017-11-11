import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/index';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC96A8rI1bqxqLtFCdbqsRGbvGDEOCmI7Y',
      authDomain: 'authexample-67260.firebaseapp.com',
      databaseURL: 'https://authexample-67260.firebaseio.com',
      projectId: 'authexample-67260',
      storageBucket: 'authexample-67260.appspot.com',
      messagingSenderId: '403863614896'
    });
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
