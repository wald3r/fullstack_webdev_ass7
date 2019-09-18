import React from 'react'
import { Button } from 'react-bootstrap'



const AddBlogForm = ({ handleAddBlog, handleTitleChange, handleAuthorChange, handleUrlChange, title, author, url }) => (

    <form onSubmit={handleAddBlog}>
        <h1>Add Blog</h1>
        <div className='row'>
            <div className='col-sm-1'>Title</div>
            <div className='col-sm-1'><input
                value={title}
                onChange={handleTitleChange}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-1'>Author</div>
            <div className='col-sm-1'><input
                value={author}
                onChange={handleAuthorChange}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-1'>Url</div>
            <div className='col-sm-1'><input
                value={url}
                onChange={handleUrlChange}/>
            </div>
        </div>
        <Button type="submit">create</Button>
    </form>


)

export default AddBlogForm