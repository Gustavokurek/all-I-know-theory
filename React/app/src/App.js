import React from 'react';
import Login from './pages/login';
import GlobalStyles, { Conteiner } from './styles/GlobalStyles';

const App = function app() {
  return (
    <Conteiner>
      <GlobalStyles />
      <Login />
    </Conteiner>
  );
};

export default App;
