import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function FullScreen({route}) {
  const {data} = route.params;

  return (
    <View style={styles.content}>
      <Image
        source={{uri: data}}
        style={styles.imageStyle}
        resizeMode="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#cce3cb',
  },
  imageStyle: {
    width: '100%',
    height: '90%',
    marginTop: '5%',
  },
});
