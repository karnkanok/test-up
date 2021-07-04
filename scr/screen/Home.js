import React from 'react';
import {View, StyleSheet} from 'react-native';
import SliImage from '../components/SliImage';
import Logout from '../components/Logout';

export default function Home({navigation}) {
  return (
    <View style={styles.content}>
      <Logout navigation={navigation} />

      <SliImage navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: '5%',
    alignItems: 'center',
    backgroundColor: '#cce3cb',
  },
});
