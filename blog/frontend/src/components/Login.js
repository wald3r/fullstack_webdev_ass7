
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
            handleNotification('Login successfull!', 5000)
            resetusername()
            resetpasswd()
            console.log(props)
            props.history.push('/')
            
        }catch(exception){
            handleError('Login failed!', 5000)
            resetusername()
            resetpasswd()
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