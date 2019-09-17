import React from 'react'
import { Button } from 'react-bootstrap'


const SimpleBlog = ({ blog, onClick }) => (
    <div>
        <div>
            {blog.title} {blog.author}
        </div>
        <div>
        blog has {blog.likes} likes
            <Button onClick={onClick}>like</Button>
        </div>
    </div>
)

export default SimpleBlog