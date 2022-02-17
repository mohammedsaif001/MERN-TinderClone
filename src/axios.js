const axios = require('axios')

const instance = axios.create({
    baseUrl: 'http://localhost:8080'
})

export default instance