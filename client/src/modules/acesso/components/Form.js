import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../redux/index'

const Form = ({ onSubmit }) => {   

    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')
    
    return (
        <form onSubmit={e => {
            e.preventDefault()
            var autorizacao = {autorizacao:{ name: name, pwd:pwd }}        
            onSubmit(autorizacao)
            setName('')
            setPwd('')
        }} className="form">
            <input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
            <input value={pwd} onChange={e => setPwd(e.target.value)} placeholder="pwd" />
            <button type="submit">+</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    onSubmit: autorizacao => dispatch(loginUser(autorizacao))
})

export default connect(null, mapDispatchToProps)(Form)