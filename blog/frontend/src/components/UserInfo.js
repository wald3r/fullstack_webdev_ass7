import React from 'react'
import { connect } from 'react-redux'

const UserInfo = ( { user, blogs } ) => {

    if(user === undefined){
        return null
    }

    if(blogs === undefined){
        return null
    }

    const findBlogTitleById = (id) => {
        const blog = blogs.find(blog => blog.id === id)
        if(blog === undefined){
            return null
        }
        else {
            return blog.title
        }
    }

    return (
        <div>
            <br></br>
            <h2>{user.name}</h2>
            <table className='table .table-striped'>
                <thead className='thead-dark'>
                    <tr>
                        <th>added blogs</th>
                    </tr>
                </thead>
                <tbody>
                    {user.blogs.map(blog =>
                        <tr key={blog}>
                            <td>{findBlogTitleById(blog)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
    }
}

export default connect(mapStateToProps, null)(UserInfo)