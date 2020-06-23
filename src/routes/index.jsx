import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabs from './HomeTabs';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CreatePost from '../pages/CreatePost';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
