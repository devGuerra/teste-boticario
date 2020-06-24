import React from 'react';
import PropTypes from 'prop-types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import colors from '../../constants/colors';
import PostButton from '../../components/PostButton';
import Feed from '../../pages/Feed';
import News from '../../pages/News';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PostButton title="New" onPress={() => navigation.navigate('CreatePost')} />
      ),
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        style: {
          backgroundColor: colors.default,
        },
      }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
};

export default HomeTabs;

HomeTabs.propTypes = {
  navigation: PropTypes.func.isRequired,
};
