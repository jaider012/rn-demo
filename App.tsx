// src/App.tsx
import React from 'react';
import {Provider} from 'react-redux';

import {StatusBar} from 'react-native';
import {AppNavigator} from './src/navigation/AppNavigator';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      <AppNavigator />
    </Provider>
  );
};

export default App;
