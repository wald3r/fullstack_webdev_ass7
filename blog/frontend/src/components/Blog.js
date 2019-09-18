import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Route, Redirect, withRouter, Link } from 'react-router-dom'

const Blog = ({ blog }) => (

    <tr>
        <td>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </td>
    </tr>
)



export default Blog