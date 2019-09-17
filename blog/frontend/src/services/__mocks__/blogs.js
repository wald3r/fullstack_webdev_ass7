
let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}


const blogs = [
    {
        id: '5a451df7571c224a31b5c8ce',
        author: 'daniel',
        title: 'title1',
        url: 'www.whatsoever.com',
        user: {
            _id: '5a437a9e514ab7f168ddf138',
            username: 'daniel',
            name: 'daniel'
        }
    },
    {
        id: '5a451e21e0b8b04a45638211',
        author: 'daniel',
        title: 'title2',
        url: 'www.whatsoever.com',
        user: {
            _id: '5a437a9e514ab7f168ddf138',
            username: 'daniel',
            name: 'daniel'
        }
    },
    {
        id: '5a451e30b5ffd44a58fa79ab',
        author: 'daniel',
        title: 'title3',
        url: 'www.whatsoever.com',
        user: {
            _id: '5a437a9e514ab7f168ddf138',
            username: 'daniel',
            name: 'daniel'
        }
    }
]


const getAll = () => {
    return Promise.resolve(blogs)
}

export default { getAll, setToken }