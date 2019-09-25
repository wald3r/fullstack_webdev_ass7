import usersService from '../services/users'



export const getAllUsers = () => {
    return async dispatch => {
        const users = await usersService.getAll()
        dispatch({
            type: 'GETALL',
            data: users
        })
    }
}


const usersReduce = (state = [], action) => {

    switch(action.type){

    case 'GETALL':
        console.log(action.data)
        return action.data

    default:
        return state
    }
}


export default usersReduce

