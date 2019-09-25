import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addCommentToBlog } from '../reducers/blogReducer'

const Comments = ({ blog, ...props }) => {

    const [comment, setComment] = useState('')

    const handleSubmit = async () => {
        props.addCommentToBlog(blog, comment)
        setComment('')
    }

    console.log(blog.comments)

    return (
        <div>
            <form onSubmit={handleSubmit} >
                COMMENT:<input
                    value={comment}
                    onChange={({ target }) => setComment(target.value)}/>
                <Button type="submit">submit</Button>
            </form>
            <table className='table .table-striped'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {blog.comments.map((c, i) =>
                        <tr key={i}>
                            <td>{c}</td>
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

const mapDispatchToProps = {
    addCommentToBlog
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments)