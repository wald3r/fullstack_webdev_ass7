import React from 'react'


const LoginForm = ({ username, password, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <h1>log in to application</h1>
        <div>
            username <input
                {...username}
            />
        </div>
        <div>
            password <input
                {...password}
            />
        </div>
        <button type="submit">login</button>
    </form>
)



export default LoginForm