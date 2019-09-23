import React from 'react'
import { connect } from 'react-redux'
import { likeBlog, removeBlog } from '../reducers/blogReducer'
import { handleNotification } from '../reducers/notificationReducer'


const BlogInfo = ({ blog, ...props }) => {



    if(blog === undefined){
        return null
    }

    const hideWhenNoAuthorization = { display: props.user.id === blog.user ? '' : 'none' }




    console.log(hideWhenNoAuthorization)
    console.log(props.user)
    console.log(blog)

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
        <div style={blogStyle}>
            <p>{blog.title}</p>
            <p>{blog.author}</p>
            <p>{blog.url}</p>
            <p>{blog.likes} <button onClick={handleLikes}>like</button></p>
            <div style={hideWhenNoAuthorization}>
                <button onClick={handleRemoval}>remove</button>
            </div>
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