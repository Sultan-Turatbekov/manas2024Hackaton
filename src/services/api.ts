import axios from 'axios'
const baseURL = 'http://35.232.168.91:8072/avionix'

const client = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})

export { client }