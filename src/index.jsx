import React from 'react';

import 'react-native-gesture-handler';
import Routes from './routes';

import DefaulStatusBar from './components/StatusBar';

const App = () => (
  <>
    <DefaulStatusBar
      backgroundColor="#6F967E"
      barStyle="light-content"
    />
    <Routes />
  </>
);

export default App;
