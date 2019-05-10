// /api/app/logado/cadastro/usuario/pesquisa/lista
import { RAPI } from "../../../../../../../src/request-api";

export const lista_usuarios = (i)  =>  { 
    function APIex(x) { return RAPI('app/logado/cadastro/usuario/pesquisa/lista',{pesquisa:x}) }
    async function Execute(x) { return await APIex(x); }
    return Execute(i)
}