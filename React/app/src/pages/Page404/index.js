import React from 'react';
import { Conteiner } from '../../styles/GlobalStyles';
import { Title, Para } from './styled';
import history from '../../services/history';

const Page404 = function Page404() {
  return (
    <Conteiner>
      <Title>404 essa pagina não existe</Title>
    </Conteiner>
  );
};

export default Page404;
