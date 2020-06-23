import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Feed from '../../pages/Feed';
import News from '../../pages/News';

const Tab = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
