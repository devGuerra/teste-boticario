import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../pages/Feed';
import HeaderTabs from './HeaderTabs';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Boticario" component={HeaderTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
