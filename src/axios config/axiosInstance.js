import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4030'
})

export default axiosInstance