import axios from 'axios'
const baseURL = 'http://192.168.100.195:5000/api/'

export const fetch = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const client = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})

