import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../constants/colors';
import HomeTabs from './HomeTabs';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CreatePost from '../pages/CreatePost';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Criar Conta',
          headerStyle: {
            backgroundColor: colors.default,

          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          title: 'Feed',
          headerStyle: {
            backgroundColor: colors.default,

          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          title: 'Novo Post',
          headerStyle: {
            backgroundColor: colors.default,

          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
