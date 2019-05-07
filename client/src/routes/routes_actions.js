import { push } from "connected-react-router";

export const logadoInicio = (e) => dispatch => {
    e.preventDefault()
    dispatch(push("/logado"));
  }

export const logadoCadastros = (event) => dispatch => {      
  dispatch(push("/logado/cadastros"));
}

export const logadoRelatorios = () => dispatch => {
    dispatch(push("/logado/relatorios"));
  }

  export const logadoAjuda  = () => dispatch => {
    dispatch(push("/logado/ajuda"));
  }  

  export const logadoSair = () => dispatch => {
    dispatch(push("/"));
  }  