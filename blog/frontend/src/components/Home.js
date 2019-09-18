import React, { useState } from 'react'
import { handleNotification } from '../reducers/notificationReducer'
import { initBlogs, addNewBlog, likeBlog, removeBlog } from '../reducers/blogReducer'
import { handleError } from '../reducers/errorReducer'
import { connect } from 'react-redux'
import AddBlogForm from './AddBlogForm'
import Togglable from './Togglable'
import Blog from './Blog'


const Home = ( { ...props } ) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')


    const handleAddBlog = event => {
        event.preventDefault()
        console.log('adding blog', title, author, url)

        const newBlog = {
            title: title,
            author: author,
            url: url,
        }
        props.addNewBlog(newBlog)
        props.handleNotification(`a new blog ${title} by ${author} added`, 5000)
        setAuthor('')
        setTitle('')
        setUrl('')
        window.location.reload()

    }

    return(
        <div>
            <div>
                <Togglable buttonLabel='new Blog'>
                    <AddBlogForm
                        author={author}
                        title={title}
                        url={url}
                        handleAuthorChange={({ target }) => setAuthor(target.value)}
                        handleTitleChange={({ target }) => setTitle(target.value)}
                        handleUrlChange={({ target }) => setUrl(target.value)}
                        handleAddBlog={handleAddBlog}
                    />
                </Togglable>
            </div>
            <br></br>
            <h2>added blogs</h2>
            <ul>
                {props.blogs.map(blog =>
                    <Blog
                        key={blog.id}
                        blog={blog}
                    /> )}
            </ul>
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
    initBlogs,
    addNewBlog,
    likeBlog,
    removeBlog,
    handleNotification,
    handleError,

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)