
import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { handleNotification } from '../reducers/notificationReducer'
import { handleError } from '../reducers/errorReducer'
import { loginUser } from '../reducers/userReducer'

const Login = ( { handleNotification, username, password, handleError, resetusername, resetpasswd, loginUser, ...props } ) => {

    const handleLogin = async event => {
        event.preventDefault()
        console.log('loggin in with: ', username.value, password.value)
        try{
            loginUser(username.value, password.value)
            console.log('User is:', props.user)
            handleNotification('Login successfull!', 5000)
            resetpasswd()
            resetusername()
            props.history.push('/')
        }catch(exception){
            handleError('Login failed!', 5000)
            resetpasswd()
            resetusername()
            props.history.push('/')
        }
    }

    return(
        <div>
            <LoginForm
                username={username}
                password={password}
                handleSubmit={handleLogin}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification,
        error: state.error,
        user: state.user
    }
}

const mapDispatchToProps = {

    handleNotification,
    handleError,
    loginUser,

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)