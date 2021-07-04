import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Logout({navigation}) {
  return (
    <View style={styles.content}>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
        style={styles.buttonStyle}>
        <Text style={styles.textStyle}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
    width: '30%',
  },
  textStyle: {
    fontSize: 20,
    // color: '#8fcaca',
    color: '#000',
  },
  buttonStyle: {
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#f67',
  },
});
