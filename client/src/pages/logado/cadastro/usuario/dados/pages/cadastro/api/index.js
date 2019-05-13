// /api/app/logado/cadastro/usuario/pesquisa/lista
import { RAPI } from "../../../../../../../src/request-api";

export const dados_usuario_cadastro = (i)  =>  { 
    function APIex(x) { return RAPI('app/logado/cadastro/usuario/cadastro/dados',{id:i}) }
    async function Execute(x) { return await APIex(x); }
    return Execute(i)
}

export const dados_usuario_cadastro_gravar = (i)  =>  { 
    function APIex(x) { return RAPI('app/logado/cadastro/usuario/cadastro/gravar',i) }
    async function Execute(x) { return await APIex(x); }
    return Execute(i)
}
