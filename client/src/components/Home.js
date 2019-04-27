import React from 'react'
import Title from './Title'
import UserList from './UserList'
import Form from './Form'

const Home = () => (
    <div className="App">
        <Title text='Usuários' />
        <UserList />
        <Form></Form>
    </div>
)

export default Home