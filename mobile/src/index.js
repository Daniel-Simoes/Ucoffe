import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

export default function () {
  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#333" />
    </>
  );
}
