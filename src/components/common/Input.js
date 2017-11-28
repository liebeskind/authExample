import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23, //How much space is inbetween each line of text.  Makes text stand out more.
    flex: 2 //Proportion available space amongst siblings.  2/3 allocated to inputStyle.
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 //Proportion available space amongst siblings.  1/3 allocated to labelStyle.
  },
  containerStyle: {
    height: 40,
    flex: 1, //Fill all available space
    flexDirection: 'row', //Make sure the two items line up in the row direction.
    alignItems: 'center' //Make sure items are lined up vertically.
  }
};

export { Input };
