import React from 'react'
import { connect } from 'react-redux'
import { likeBlog, removeBlog } from '../reducers/blogReducer'
import { handleNotification } from '../reducers/notificationReducer'
import Comments from './Comments'
import { Button } from 'react-bootstrap'



const BlogInfo = ({ blog, ...props }) => {

    if(blog === undefined){
        return null
    }
    console.log('User:', props.user)
    console.log('Blog:',blog)
    const hideWhenNoAuthorization = { display: props.user.id === blog.user.id ? '' : 'none' }


    const handleLikes = () => {
        props.likeBlog(blog)
        props.handleNotification(`you liked blog ${blog.title} from author ${blog.author}`, 5000)
    }


    const handleRemoval = () => {
        const result = window.confirm(`Do you really want to delete blog ${blog.title}?`)
        if(result){
            props.removeBlog(blog)
            props.handleNotification(`blog ${blog.title} by ${blog.author} got deleted`, 5000)
            props.history.push('/')
        }
    }

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    return (
        <div>
            <div style={blogStyle}>
                <p>{blog.title}</p>
                <p>{blog.author}</p>
                <p>{blog.url}</p>
                <p>{blog.likes} <Button onClick={handleLikes}>like</Button></p>
                <div style={hideWhenNoAuthorization}>
                    <Button onClick={handleRemoval}>remove</Button>
                </div>
                <br></br>
            </div>
            <Comments blog={blog}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        notification: state.notification,
        error: state.error,
        user: state.user,
    }
}

const mapDispatchToProps = {
    likeBlog,
    removeBlog,
    handleNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogInfo)