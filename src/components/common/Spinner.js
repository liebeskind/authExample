import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => { //No requirement for state, so functional component.
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator 
        size={size || 'large'} //Defaults if not set.
      />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1, //Fill the full width
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
