
import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { handleNotification } from '../reducers/notificationReducer'
import { handleError } from '../reducers/errorReducer'
import { setUser } from '../reducers/userReducer'
import loginService from '../services/login'

const Login = ( { handleNotification, username, password, handleError, resetusername, resetpasswd, setUser, ...props } ) => {

    const handleLogin = async event => {
        event.preventDefault()
        console.log('loggin in with: ', username.value, password.value)
        const user = await loginService.login({ username: username.value, password: password.value })
        if(user !== undefined){
            setUser(user)
            handleNotification('Login successfull!', 5000)
        }else{
            handleError('Login failed!', 5000)
        }
        resetpasswd()
        resetusername()
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
    setUser,

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)