import React from 'react'
import { render,  waitForElement } from '@testing-library/react'
jest.mock('../services/blogs')
import App from '../App'

describe('<App />', () => {

    test('renders no blogs, when logged out', async () => {

        const component = render(
            <App />
        )
        component.rerender(<App />)
        await waitForElement(() => component.container.querySelector('.shortBlogInfo'))

        const blogs = component.container.querySelectorAll('.shortBlogInfo')
        expect(blogs.length).toBe(0)

    })


    test('renders all blogs, when logged in', async () => {

        const user = {
            username: 'tester',
            token: '1231231214',
            name: 'Donald Tester'
        }

        localStorage.setItem('loggedBlogappUser', JSON.stringify(user))

        const component = render(
            <App />
        )
        component.rerender(<App />)
        await waitForElement(() => component.container.querySelector('.shortBlogInfo'))

        const blogs = component.container.querySelectorAll('.shortBlogInfo')
        expect(blogs.length).toBe(3)

        expect(component.container).toHaveTextContent(
            'title1'
        )
        expect(component.container).toHaveTextContent(
            'title2'
        )
        expect(component.container).toHaveTextContent(
            'title3'
        )
    })
})