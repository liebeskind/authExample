import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state= { 
    email: '', 
    password: '',
    error: ''
  };

  onButtonPress() {
    const { email, password } = this.state; //destructuring
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => { //If this request fails, enter the fat arrow function.
      firebase.auth().createUserWithEmailAndPasswor(email, password)
      .catch(() => {
        this.setState({ error: 'Authentication Failed.' });
      });
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          /> 
        </CardSection>
        
        <CardSection>
          <Input
            secureTextEntry //ES6, don't need to enter Bool if it's true.
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        
        <CardSection>
          <Button 
            onPress={this.onButtonPress.bind(this)} //Called later and want access to 'this'.
          >
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
