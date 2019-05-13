import * as API from '../api'

// API
export const api_dados_usuario_cadastro = (i)  => dispatch => { return API.dados_usuario_cadastro(i) }
export const api_dados_usuario_gravar = (i)  => dispatch => { return API.dados_usuario_cadastro_gravar(i) }
