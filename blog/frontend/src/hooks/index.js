import { useState } from 'react'



export const usePassword = (type) => {

    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const resetpasswd = () => {
        setValue('')
    }

    return {
        type,
        value,
        onChange,
        resetpasswd
    }


}


export const useUsername = (type) => {

    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const resetusername = () => {
        setValue('')
    }

    return {
        type,
        value,
        onChange,
        resetusername
    }


}
