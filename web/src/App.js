import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotronConfig';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Order from './components/Order';
import SocialMidia from './components/SocialMidia';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Order />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Footer />
        <SocialMidia />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
