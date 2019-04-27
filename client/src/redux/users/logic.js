import { createLogic } from "redux-logic"
import { LIST_USERS, listUsersSuccess, listUsersError, ADD_USER, addUserSuccess, addUserError, DELETE_USER, deleteUserSuccess, deleteUserError } from "."
import * as API from '../../API'

const listUsersLogic = createLogic({
    
    name: 'listUsersLogic',

    type: LIST_USERS,

    process({ action }, dispatch, done) {
        API
        .listUsers()
        .then(users => dispatch(listUsersSuccess(users)))
        .catch(err => dispatch(listUsersError(err)))
        .finally(() => done())
    }
})

const addUserLogic = createLogic({
    name: 'addUserLogic',
    type: ADD_USER,
    process({ action: { payload: { name }}}, dispatch, done) {
        API
        .addUser(name)
        .then(created => dispatch(addUserSuccess(created)))
        .catch(err => dispatch(addUserError(err)))
        .finally(() => done())
    }
})

export const deleteUserLogic = createLogic({
    name: '',
    type: DELETE_USER,
    process({ action: { payload: { id }}}, dispatch, done) {
        return API
        .deleteUser(id)
        .then(() => dispatch(deleteUserSuccess(id)))
        .catch(err => dispatch(deleteUserError(err)))
        .finally(() => done())
    }
})

export default [
    listUsersLogic,
    addUserLogic,
    deleteUserLogic
]