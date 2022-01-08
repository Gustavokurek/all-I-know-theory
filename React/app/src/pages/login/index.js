import React from 'react';
import { useDispatch } from 'react-redux';
import { Conteiner } from '../../styles/GlobalStyles';
import { Title, Para } from './styled';
import * as exempleActions from '../../store/modules/exemple/actions';

const Login = function login() {
  const dispatch = useDispatch();

  function HandleClick(e) {
    e.preventDefault();

    dispatch(exempleActions.clicaBotão());
  }
  return (
    <Conteiner>
      <Title>
        Login
        <small>minha autoestima</small>
      </Title>
      <Para>lalallalal, vou jogar</Para>
      <button type="button" onClick={HandleClick}>
        enviar
      </button>
    </Conteiner>
  );
};

export default Login;
