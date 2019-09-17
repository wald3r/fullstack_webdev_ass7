import React from 'react'
import { Form, Button } from 'react-bootstrap'

const LoginForm = ({ username, password, handleSubmit }) => (

    <Form onSubmit={handleSubmit}>
        <h2>log in to application</h2>
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
        <Button type="submit">login</Button>
    </Form>
)


export default LoginForm