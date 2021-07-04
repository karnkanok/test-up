import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screen/Home';
import Login from '../screen/Login';
import FullScreen from '../screen/FullScreen';

const Stack = createStackNavigator();
export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FullScreen" component={FullScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
