import blogService from '../services/blogs'


export const setUser = ( user ) => {
    return async dispatch => {
        window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
        blogService.setToken(user.token)
        dispatch({
            type: 'SETUSER',
            user
        })
    }
}

export const removeUser = () => {
    return async dispatch => {
        window.localStorage.removeItem('loggedBlogappUser')
        dispatch({
            type: 'REMOVEUSER',
        })
    }
}

const userReducer = (state = null, action) => {

    console.log(action.type)
    switch (action.type){
    case 'SETUSER':
        return action.user
    case 'REMOVEUSER':
        return null
    default:
        return state
    }
}


export default userReducer