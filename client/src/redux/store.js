import { createStore, combineReducers, applyMiddleware } from "redux"
import acesso from '../modules/acesso/redux/index'
import acessoLogics from '../modules/acesso/redux/logic'
import users from './users'
import usersLogics from './users/logic'
import todos from './todos'
import { createLogicMiddleware } from "redux-logic"

const logics = [...acessoLogics]
const store = createStore(
    combineReducers({ acesso }),
    applyMiddleware(createLogicMiddleware(logics))
)

export default store