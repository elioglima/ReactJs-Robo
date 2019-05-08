import * as Actions from '../../../../routes/routes_actions'
import * as auth from '../../../src/auth_app'

export const dispChkAuth = ()  => dispatch => { return dispatch(auth.dispChkAuth()) }
export const dispInicio = (e) => dispatch => {dispatch(Actions.dispInicio(e));}
export const dispAjuda  = (e) => dispatch => {dispatch(Actions.dispAjuda(e));}
export const disPesquisaGeral = (e, inp_pesquisa) => dispatch => { dispatch(Actions.disPesquisaGeral(e, inp_pesquisa)); }
export const dispSair = (e) => dispatch => {dispatch(Actions.dispSair(e));}  
export const dispCadUsuario = (e) => dispatch => { dispatch(Actions.dispCadUsuario(e)); }
export const dispCadGrupoAcessoUsuarios = (e) => dispatch => { dispatch(Actions.dispCadGrupoAcessoUsuarios(e)); }
