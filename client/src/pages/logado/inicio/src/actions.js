import { push } from "connected-react-router";
import { SairSistema as APISairSistema  } from '../../../src/applications'
import * as Actions from '../../../../routes/routes_actions'


export const logadoInicio = (e) => dispatch => {  
  dispatch(Actions.logadoInicio(e));
}

export const logadoCadastros = (event) => dispatch => {      
  dispatch(Actions.logadoCadastros());
}

export const logadoRelatorios = () => dispatch => {
  dispatch(Actions.logadoRelatorios());
}

export const logadoAjuda  = () => dispatch => {
  dispatch(Actions.logadoAjuda());
}  

export const logadoSair = () => dispatch => {
  dispatch(Actions.logadoSair());
}  

export const Voltar = () => dispatch => {
  dispatch(push("/"));
};

export const SairSistema = () => dispatch => {  
  dispatch(APISairSistema());

};

