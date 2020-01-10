import React from 'react';
import Header from './Header/Header';
import Footer from '../components/Footer/Footer';
import Routes from '../routes';
import Loader from './Loader/Loader';
import GlobalStyle from './GlobalStyleComponent';

export const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <GlobalStyle />
    <Header />
    <Routes />
    <Footer />
    <Loader />
  </>
);

export default App;
