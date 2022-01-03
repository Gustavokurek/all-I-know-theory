import React from 'react';
import { Conteiner } from '../../styles/GlobalStyles';
import { Title, Para } from './styled';

export default function login() {
  return (
    <Conteiner>
      <Title>
        Login
        <small>minha autoestima</small>
      </Title>
      <Para>lalallalal, vou jogar</Para>
      <button type="button">enviar</button>
    </Conteiner>
  );
}
