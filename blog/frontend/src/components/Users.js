import React from 'react'
import { getAllUsers } from '../reducers/usersReducer'
import { connect } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const Users = (props) => {

    return(
        <div>
            <br></br>
            <h1>Users</h1>
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Blogs created</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user =>
                        <tr key={user.id}>
                            <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                            <td>{user.blogs.length}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = {
    getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)


