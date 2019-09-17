import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Togglable from '../components/Togglable'
import ShortBlogInfo from '../components/ShortBlogInfo'
import BlogInfo from '../components/BlogInfo'


describe('<Togglable />', () => {
    let component

    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'Daniel',
        likes: 10,
        url: 'www.whatever.com',
        user: 1,
    }

    const user = {
        id: 1
    }

    const mockHandler1 = jest.fn()
    const mockHandler2 = jest.fn()

    beforeEach(() => {



        component = render(
            <Togglable buttonLabel={<ShortBlogInfo blog={blog}/>}>
                <BlogInfo
                    blog={blog}
                    handleLikes={mockHandler1}
                    handleRemoval={mockHandler2}
                    user={user}
                />
            </Togglable>
        )
    })

    /*test('renders its children', () => {
        component.container.querySelector('.testDiv')
    })*/

    test('at start the children are not displayed', () => {
        const bloginfo = component.container.querySelector('.togglableContent')
        const shortBlogInfo = component.container.querySelector('.shortBlogInfo')

        expect(bloginfo).toHaveStyle('display: none')
        expect(shortBlogInfo).toHaveTextContent('Component testing is done with react-testing-library')
        expect(shortBlogInfo).toHaveTextContent('Daniel')
        expect(shortBlogInfo).not.toHaveTextContent('10')


    })

    test('after clicking the button, children are displayed', () => {
        const button = component.container.querySelector('.button')
        fireEvent.click(button)

        const bloginfo = component.container.querySelector('.togglableContent')
        expect(bloginfo).not.toHaveStyle('display: none')
        expect(bloginfo).toHaveTextContent('Component testing is done with react-testing-library')
        expect(bloginfo).toHaveTextContent('10')


    })

})

