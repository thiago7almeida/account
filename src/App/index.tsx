import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import Router from '../components/Router';
import store from '../store';

const account: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
      <StatusBar translucent backgroundColor="transparent" />
      <FlashMessage position="center" />
    </Provider>
  );
};

export default account;
