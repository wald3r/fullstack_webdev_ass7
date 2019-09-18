import React from 'react'
import { connect } from 'react-redux'

const UserInfo = ( { user, blogs } ) => {

    if(user === undefined){
        return null
    }
    console.log(user)
    const findBlogById = (id) => blogs.find(blog => blog.id === id)

    return (
        <div>
            <h2>{user.name}</h2>
            <div>added blogs</div>
            <ul>
                {user.blogs.map(blog =>
                    <li key={blog}>
                        <div>{blog}</div>
                    </li>
                )}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
    }
}

export default connect(mapStateToProps)(UserInfo)