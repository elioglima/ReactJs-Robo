import { createLogic } from "redux-logic"
import { LOGIN_USER, loginUserSuccess, loginUserError} from "."
import * as api from '../api/auth'

const loginUsersLogic = createLogic({
    
    name: 'listUsersLogic',
    type: LOGIN_USER,
    process({ action: { payload: { autorizacao }}}, dispatch, done) {
        // console.log('loginUsersLogic',autorizacao)
        api.logar(autorizacao)
        .then(autorizado => dispatch(loginUserSuccess(autorizado)))
        .catch(err => dispatch(loginUserError(err)))
        .finally(() => done())
    }
})

export default [
    loginUsersLogic
]