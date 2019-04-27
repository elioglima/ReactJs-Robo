
let TODOS = [
    { id: 1, text: 'Learn Redux' }
]

export const LIST_TODOS = 'LIST_TODOS'
export const listTodos = () => ({ type: LIST_TODOS })
const reducer = (state = [], action) => {
    switch (action.type) {
        case LIST_TODOS:
            return [...TODOS]
        default:
            return state
    }
} 

export default reducer