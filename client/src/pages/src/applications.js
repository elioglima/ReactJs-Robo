import { push } from "connected-react-router"

export const dispSairSistema = () => dispatch => {
    localStorage.setItem('A1','')
    localStorage.setItem('cad','')
    dispatch(push('/'))

    
}
