import axios from 'axios'
import { getToken } from '../Services/TokenService'
import { API_URL } from '../utils/utils'

const AppAxios = axios.create({
    baseURL:API_URL,
    timeout:10000
})

const RequestHandler = request=>{
    request.headers.Authorization = `Bearer ${getToken()}`
    console.log('Request is called')
    return request;
}

const ResponseHandler = response=>{
    console.log(response)
    console.log('response is called')
    return response
}

const ErrorHandler = error=>{
    return Promise.reject(error)
}

AppAxios.interceptors.request.use((request)=>RequestHandler(request),(error)=>ErrorHandler(error))

AppAxios.interceptors.response.use((response)=>ResponseHandler(response),(error)=>ErrorHandler(error))

export default AppAxios


