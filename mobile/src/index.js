import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Header from './components/Header';
import Hr from './components/Hr';

import Routes from './routes';

export default function () {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3a3b3d" />
      <Header />
      <Hr />
      <Routes />
    </>
  );
}
