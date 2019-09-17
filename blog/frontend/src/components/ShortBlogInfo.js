import React from 'react'


const ShortBlogInfo = ({ blog }) => (

    <li className="shortBlogInfo">
        {blog.title} {blog.author}
    </li>
)


export default ShortBlogInfo