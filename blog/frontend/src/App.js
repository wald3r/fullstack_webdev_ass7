/* eslint-disable no-unused-labels */
import React, { useEffect } from 'react'
import Notification from './components/Notification'
import Error from './components/Error'
import { useUsername, usePassword } from './hooks'
import { initBlogs, addNewBlog, likeBlog, removeBlog } from './reducers/blogReducer'
import { handleNotification } from './reducers/notificationReducer'
import { setUser, removeUser } from './reducers/userReducer'
import { handleError } from './reducers/errorReducer'
import { getAllUsers } from './reducers/usersReducer'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UserInformation from './components/UserInformation'
import Home from './components/Home'
import Login from './components/Login'
import { Button } from 'react-bootstrap'

const App = ( props ) => {

    const { resetpasswd, ...password } = usePassword('password')
    const { resetusername, ...username } = useUsername('username')
   // const [user, setUser] = useState(null)

    const padding = { padding: 5 }

    useEffect(() => {
        //window.localStorage.removeItem('loggedBlogappUser')
        const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            //setUser(user)
            //window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
            //blogService.setToken(user.token)
            props.getAllUsers()
            props.setUser(user)
            props.initBlogs()
        }
    }, [])

    const handleLogout = () => {
        try{
            props.removeUser()
            //setUser(null)
            //window.localStorage.removeItem('loggedBlogappUser')
            props.handleNotification('Logout successfully, 5000')
        }catch(exception){
            props.handleError('Logout failed!', 5000)
        }
    }
    if(props.user === null){
        return(
            <div>
                <Notification />
                <Error />
                <Router>
                    <Route exact path='/' render={() =>
                        <Login
                            username={username}
                            password={password}
                            resetpasswd={() => resetpasswd()}
                            resetusername={() => resetusername()}
                        /> } />
                </Router>
            </div>
        )
    }else{
        return(
            <div className='container'>
                <Notification />
                <Error />
                <Router>
                    <div>
                        <h1>Blog app</h1>
                        <Link style={padding} to='/'>Home</Link>
                        <Link style={padding} to='/users'>Users</Link>
                        {username.value} is logged in <Button onClick={handleLogout}>logout</Button>
                    </div>
                    <Route exact path='/' render={() => <Home />} />
                    <Route path='/users' render={() => <UserInformation /> } />
                </Router>
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        notification: state.notification,
        error: state.error,
        user: state.user,
        users: state.users,
    }
}

const mapDispatchToProps = {
    initBlogs,
    addNewBlog,
    likeBlog,
    removeBlog,
    handleNotification,
    handleError,
    setUser,
    removeUser,
    getAllUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)