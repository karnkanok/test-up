import React from 'react';
import {View, Text, TextInput} from 'react-native';

export default function Input({
  styles,
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <>
      <TextInput
        style={styles}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
}
