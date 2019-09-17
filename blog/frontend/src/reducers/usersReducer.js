import usersService from '../services/users'



export const getAllUsers = () => {
    return async dispatch => {
        const users = await usersService.getAll()
        console.log(users)
        dispatch({
            type: 'GETALL',
            data: users
        })
    }
}


const usersReduce = (state = [], action) => {

    console.log(action.data)
    switch(action.type){

    case 'GETALL':
        return action.data

    default:
        return state
    }
}


export default usersReduce

