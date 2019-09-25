import React from 'react'
import { Form, Button } from 'react-bootstrap'

const LoginForm = ({ username, password, handleSubmit }) => (

    <Form onSubmit={handleSubmit}>

        <h1>login to application</h1>
        <div className='row'>
            <div className='col-sm-2'>   Username:</div>
            <div className='col-sm-1'><input {...username}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-2'>   Password:</div>
            <div className='col-sm-1'><input type='password' {...password}/>
            </div>
        </div>
        <Button type="submit">login</Button>
    </Form>
)


export default LoginForm