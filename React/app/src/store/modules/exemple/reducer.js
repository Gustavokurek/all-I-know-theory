const initialState = {
  botãoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'botão_clicado': {
      const newState = { ...state };
      newState.botãoClicado = !newState.botãoClicado;
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
