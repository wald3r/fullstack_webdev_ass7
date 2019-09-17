import React from 'react'
import Togglable from './Togglable'
import BlogInfo from './BlogInfo'
import ShortBlogInfo from './ShortBlogInfo'

const Blog = ({ blog, handleRemoval, handleLikes, user }) => (
    <div>
        <Togglable buttonLabel={<ShortBlogInfo blog={blog}/>}>
            <BlogInfo
                blog={blog}
                handleLikes={handleLikes}
                handleRemoval={handleRemoval}
                user={user} />
        </Togglable>
    </div>
)


export default Blog