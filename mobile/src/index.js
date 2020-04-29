import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import NavigationService from './services/navigation';

import Header from './components/Header';
import Hr from './components/Hr';

import Routes from './routes';

import store from './store';

export default function () {
  return (

    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#3a3b3d" />
      <Header />
      <Hr />
      <Routes
        ref={(navigatorRef) => NavigationService.setNavigator(navigatorRef)}
      />
      </Provider>

  );
}
