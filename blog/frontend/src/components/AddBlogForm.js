import React from 'react'
import { Button } from 'react-bootstrap'



const AddBlogForm = ({ handleAddBlog, handleTitleChange, handleAuthorChange, handleUrlChange, title, author, url }) => (

    <form onSubmit={handleAddBlog}>
        <h1>Add Blog</h1>
        <div>
            title <input
                value={title}
                onChange={handleTitleChange}
            />
        </div>
        <div>
            author <input
                value={author}
                onChange={handleAuthorChange}
            />
        </div>
        <div>
            url <input
                value={url}
                onChange={handleUrlChange}
            />
        </div>
        <Button type="submit">create</Button>
    </form>


)

export default AddBlogForm