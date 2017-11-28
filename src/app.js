import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/index';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
      </View>
    );
  }
}

export default App;
