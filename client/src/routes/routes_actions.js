import { push } from "connected-react-router";

export const logadoInicio = (e) => dispatch => {
  e.preventDefault();
  dispatch(push("/logado"));
}

export const dispCadastros = (e) => dispatch => {      
  e.preventDefault();
  dispatch(push("/logado/cadastros"));
}

export const logadoRelatorios = (e) => dispatch => {
  e.preventDefault();
  dispatch(push("/logado/relatorios"));
  }

  export const logadoAjuda  = (e) => dispatch => {
    e.preventDefault();
    dispatch(push("/logado/ajuda"));
  }  

  export const logadoSair = (e) => dispatch => {
    e.preventDefault();
    dispatch(push("/"));
  }  