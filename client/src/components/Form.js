import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../redux/users'

const Form = ({ onSubmit }) => {

    const [name, setName] = useState('')

    return (
        <form onSubmit={e => {
            e.preventDefault()
            onSubmit(name)
            setName('')
        }} className="form">
            <input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
            <button type="submit">+</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    onSubmit: name => dispatch(addUser(name))
})

export default connect(null, mapDispatchToProps)(Form)