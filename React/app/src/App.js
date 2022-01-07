import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header';
import Routes from './routes';

const App = function app() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
};

export default App;
