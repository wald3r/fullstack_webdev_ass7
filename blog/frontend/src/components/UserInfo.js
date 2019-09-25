import React from 'react'
import { connect } from 'react-redux'


const UserInfo = ( { user, blogs } ) => {

    if(user === undefined){
        console.log('user is missing')
        return null
    }

    if(blogs === undefined){
        console.log('blog is missing')
        return null
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
                        <tr key={blog.id}>
                            <td>{blog.title}</td>
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