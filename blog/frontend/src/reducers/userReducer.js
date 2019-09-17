import loginService from '../services/login'
import blogService from '../services/blogs'

export const setUser = (username, password) => {
    return async dispatch => {
        const user = await loginService.login({ username, password })
        console.log("passed")
        blogService.setToken(user.token)
        window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
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