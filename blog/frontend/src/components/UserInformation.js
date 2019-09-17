import React from 'react'
import { getAllUsers } from '../reducers/usersReducer'
import { connect } from 'react-redux'

const UserInformation = (props) => {

    console.log("Users", props.users)
    return(
        <div>
            <ul>
                {props.users.map(user =>
                    <li key={user.id}>{user.username}</li>
                )}
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation)


