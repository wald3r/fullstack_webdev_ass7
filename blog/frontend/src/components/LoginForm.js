import React from 'react'
import { Form, Button } from 'react-bootstrap'

const LoginForm = ({ username, password, handleSubmit }) => (
    <div>
        <Form onSubmit={handleSubmit}>
            <table className='table .table-striped' width="10">
                <thead className='thead-dark'>

                </thead>
                <tbody width="10">
                    <tr>
                        <td width="10">
                            Username:
                        </td>

                        <td>
                            <input {...username} />
                        </td>
                    </tr>
                    <tr>
                        <td width="10">
                            Password:
                        </td>

                        <td>
                            <input type='password' {...password} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button type="submit">login</Button>
        </Form>
    </div>
)


export default LoginForm