import { createActions, handleActions, combineActions } from 'redux-actions'

export const LIST_USERS = 'LIST_USERS'
export const LIST_USERS_SUCCESS = 'LIST_USERS_SUCCESS'
export const LIST_USERS_ERROR = 'LIST_USERS_ERROR'
export const {
    listUsers,
    listUsersSuccess,
    listUsersError
} = createActions({
    [LIST_USERS]: () => ({}),
    [LIST_USERS_SUCCESS]: users => ({ users }),
    [LIST_USERS_ERROR]: error => ({ error })
})

export const ADD_USER = 'ADD_USER'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_ERROR = 'ADD_USER_ERROR' 
export const {
    addUser,
    addUserSuccess,
    addUserError
} = createActions({
    [ADD_USER]: name => ({ name }),
    [ADD_USER_SUCCESS]: user => ({ user }),
    [ADD_USER_ERROR]: error => ({ error })
})

export const DELETE_USER = 'DELETE_USER'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR'
export const {
    deleteUser,
    deleteUserSuccess,
    deleteUserError
} = createActions({
    [DELETE_USER]: id => ({ id }),
    [DELETE_USER_SUCCESS]: id => ({ id }),
    [DELETE_USER_ERROR]: error => ({ error })
})

const reducer = handleActions({
    [combineActions(
        listUsersError,
        addUserError,
        deleteUserError    
    )]: state => [...state],
    [LIST_USERS_SUCCESS]: (state, { payload: { users }}) => [...users],
    [ADD_USER_SUCCESS]: (state, { payload: { user }}) => [...state, user],
    [DELETE_USER_SUCCESS]: (state, { payload: { id }}) => state.filter(user => user.id !== id),
}, [])

export default reducer