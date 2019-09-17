import React, { useState } from 'react'
import { handleNotification } from '../reducers/notificationReducer'
import { initBlogs, addNewBlog, likeBlog, removeBlog } from '../reducers/blogReducer'
import { handleError } from '../reducers/errorReducer'
import { connect } from 'react-redux'
import AddBlogForm from './AddBlogForm'
import Togglable from './Togglable'
import Blog from './Blog'


const Home = ( { user, ...props } ) => {

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


    const handleLikes = (blog) => {
        props.likeBlog(blog)
        props.handleNotification(`you liked blog ${blog.title} from author ${blog.author}`, 5000)
    }


    const handleRemoval = (blog) => {
        const result = window.confirm(`Do you really want to delete blog ${blog.title}?`)
        if(result){
            props.removeBlog(blog)
            props.handleNotification(`blog ${blog.title} by ${blog.author} got deleted`, 5000)
        }
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
            <ul>
                {props.blogs.map(blog =>
                    <Blog
                        key={blog.id}
                        blog={blog}
                        handleRemoval={() => handleRemoval(blog)}
                        handleLikes={() => handleLikes(blog)}
                        user={user} /> )}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        notification: state.notification,
        error: state.error,
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