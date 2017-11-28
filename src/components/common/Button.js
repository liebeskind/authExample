import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center', //Center the text inside the button
    color: '#007aff', //Blue color maps out pretty close to ios blue.
    fontSize: 16,
    fontWeight: '600', //Boldness.  This is pretty bold.
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, //Expand to fill as much content as it can
    alignSelf: 'stretch', //Position itself using flexbox rules. Stretch to fill container
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff', //Blue color maps out pretty close to ios blue.
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
