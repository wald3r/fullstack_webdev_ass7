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
import Users from './components/Users'
import Home from './components/Home'
import Login from './components/Login'
import { Button } from 'react-bootstrap'
import BlogInfo from './components/BlogInfo'
import UserInfo from './components/UserInfo'


const App = ( props ) => {

    const { resetpasswd, ...password } = usePassword('password')
    const { resetusername, ...username } = useUsername('username')

    const padding = { padding: 5 }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            props.getAllUsers()
            props.setUser(user)
            props.initBlogs()
        }
    }, [])

    const findBlogById = (id) => props.blogs.find(blog => blog.id === id)
    const findUserById = (id) => props.users.find(user => user.id === id)

    const handleLogout = () => {
        try{
            props.removeUser()
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
                    <Route exact path='/' render={(props) =>
                        <Login
                            {...props}
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
                        {props.user.username} is logged in <Button onClick={handleLogout}>logout</Button>
                    </div>
                    <Route exact path='/' render={(props) => <Home {...props}/>} />
                    <Route exact path='/users' render={(props) => <Users {...props}/> } />
                    <Route exact path='/blogs/:id' render={({ match, ...props }) => <BlogInfo {...props} blog={findBlogById(match.params.id)} />} />
                    <Route exact path='/users/:id' render={({ match, ...props }) => <UserInfo {...props} user={findUserById(match.params.id)} />} />
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