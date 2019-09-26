import blogService from '../services/blogs'




export const addNewBlog = (blog) => {
    return async dispatch => {
        const data = await blogService.create(blog)
        dispatch({
            type: 'NEWBLOG',
            data: data
        })
    }
}

export const addCommentToBlog = (blog, comment) => {
    return async dispatch => {
        const newBlog = { ...blog, comments: blog.comments.concat(comment) }
        await blogService.update(newBlog)
        dispatch({
            type: 'ADDCOMMENT',
            data: newBlog
        })
    }
}

export const initBlogs = () => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        dispatch({
            type: 'INITBLOGS',
            data: blogs
        })
    }
}


export const likeBlog = (blog) => {
    return async dispatch => {
        const newBlog = { ...blog, likes: blog.likes+1 }
        await blogService.update(newBlog)
        dispatch({
            type: 'LIKEBLOG',
            data: newBlog
        })
    }
}

export const removeBlog = (blog) => {
    return async dispatch => {
        await blogService.remove(blog)
        dispatch({
            type: 'REMOVEBLOG',
            data: blog
        })
    }
}

const blogReducer = (state = [], action) => {

    let newState = null
    switch(action.type){

    case 'NEWBLOG':
        return [...state, action.data].sort((a,b) => b.likes-a.likes)

    case 'INITBLOGS':
        return action.data.sort((a,b) =>  b.likes-a.likes )
    case 'ADDCOMMENT':
        newState = state.filter(s => s.id !== action.data.id)
        return [...newState, action.data].sort((a,b) => b.likes - a.likes)
    case 'LIKEBLOG':
        newState = state.filter(s => s.id !== action.data.id)
        return [...newState, action.data].sort((a,b) => b.likes - a.likes)
    case 'REMOVEBLOG':
        newState = state.filter(s => s.id !== action.data.id)
        return [...newState].sort((a,b) => b.likes - a.likes)
    default:
        return state
    }
}


export default blogReducer



