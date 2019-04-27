import { createActions, handleActions} from 'redux-actions'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR' 
export const {
    loginUser,
    loginUserSuccess,
    loginUserError
} = createActions({
    [LOGIN_USER]: autorizacao => ( autorizacao ),
    [LOGIN_USER_SUCCESS]: autorizacao => ( autorizacao ),
    [LOGIN_USER_ERROR]: error => ({ error })
})

const reducer = handleActions({
    [LOGIN_USER]: (state, { payload: { autorizacao }} ) => [...state,  autorizacao ],
    [LOGIN_USER_SUCCESS]: (state, { payload: { autorizacao }}) => [...state, autorizacao],
    [LOGIN_USER_ERROR]: state => [...state],
}, [])

export default reducer