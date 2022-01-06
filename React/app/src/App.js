import React from 'react';
import Login from './pages/login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header';

const App = function app() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Login />
    </>
  );
};

export default App;
