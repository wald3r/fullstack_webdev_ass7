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

export const initBlogs = () => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        console.log(blogs)
        dispatch({
            type: 'INITBLOGS',
            data: blogs
        })
    }
}


export const likeBlog = (blog) => {
    return async dispatch => {
        blog.likes += 1
        const data = await blogService.update(blog)
        dispatch({
            type: 'LIKEBLOG',
            data: data
        })
    }
}

export const removeBlog = (blog) => {
    return async dispatch => {
        const data = await blogService.remove(blog)
        dispatch({
            type: 'REMOVEBLOG',
            data: data
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



