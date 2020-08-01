import React from 'react';
import {StatusBar, ActivityIndicator} from 'react-native';

import Router from '../components/Router';

const account: React.FC = () => {
  return (
    <>
      <Router />
      <StatusBar translucent backgroundColor="transparent" />
    </>
  );
};

export default account;
