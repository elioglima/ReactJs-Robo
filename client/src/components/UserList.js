import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import { connect } from 'react-redux'
import { listUsers, deleteUser } from '../redux/users'

const UserList = ({ users, handleDelete, loadUsers }) => {

    useEffect(() => { loadUsers() }, [])

    return (
        <div>
            {
                users.map(n => (<Card key={n.id} text={n.name} index={n.id} onDelete={handleDelete} />))
            }
        </div>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    handleDelete: PropTypes.func.isRequired,
    loadUsers: PropTypes.func.isRequired,
}

const mapStateToProps = ({ name, users }) => ({ name, users })

const mapDispatchToProps = dispatch => ({
    loadUsers: () => dispatch(listUsers()),
    handleDelete: id => dispatch(deleteUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)