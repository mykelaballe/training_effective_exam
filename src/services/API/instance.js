import axios from 'axios'
import {BASEURL} from '@config'

const instance = axios.create({
    baseURL: `${BASEURL}`,
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(
	config => {
        return config
	},
	error => Promise.reject(error)
)

instance.interceptors.response.use(response => response, error => {
    return Promise.reject(error)
})

export default instance