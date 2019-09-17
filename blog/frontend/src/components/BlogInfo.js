import React from 'react'

const BlogInfo = ({ blog, handleLikes, handleRemoval, user }) => {

    const hideWhenNoAuthorization = { display: user.id === blog.user.id ? '' : 'none' }

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    return (
        <li style={blogStyle}>
            <p>{blog.title}</p>
            <p>{blog.author}</p>
            <p>{blog.url}</p>
            <p>{blog.likes} <button onClick={handleLikes}>like</button></p>
            <div style={hideWhenNoAuthorization}>
                <button onClick={handleRemoval}>remove</button>
            </div>
        </li>
    )
}

export default BlogInfo