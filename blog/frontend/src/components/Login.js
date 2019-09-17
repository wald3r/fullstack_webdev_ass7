
import React from 'react'
import LoginForm from './LoginForm'
import loginService from '../services/login'
import { connect } from 'react-redux'
import blogService from '../services/blogs'
import { handleNotification } from '../reducers/notificationReducer'
import { handleError } from '../reducers/errorReducer'


const Login = ( { handleUser, handleNotification, username, password, handleError, resetusername, resetpasswd } ) => {


    const handleLogin = async event => {
        event.preventDefault()
        console.log('loggin in with: ', username.value, password.value)
        try{
            const newUser = await loginService.login({ username: username.value, password: password.value })
            //props.setUser(username, password)
            console.log(newUser)
            handleUser(newUser)
            window.localStorage.setItem('loggedBlogappUser', JSON.stringify(newUser))
            blogService.setToken(newUser.token)
            handleNotification('Login successfull!', 5000)
            resetusername()
            resetpasswd()

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
    }
}

const mapDispatchToProps = {

    handleNotification,
    handleError

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)