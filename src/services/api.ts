import axios from 'axios'
const baseURL = 'http://192.168.100.195:5000/api/'

const client = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export { client }