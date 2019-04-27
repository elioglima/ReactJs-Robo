import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { listTodos } from '../redux/todos'

const Todos = ({ todos, loadTodos }) => {

    useEffect(() => { loadTodos() }, [])

    return (
        <>
            <h1>Tarefas</h1>
            <div>
                {todos.map(todo => (<span key={todo.id}>{todo.text}</span>))}
            </div>
        </>
    )
}

const mapStateToProps = ({ todos }) => ({ todos })
const mapDispatchToProps = dispatch => ({
    loadTodos: () => dispatch(listTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)