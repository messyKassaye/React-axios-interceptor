import axios from 'axios'
import { getToken } from '../Services/TokenService'
import { API_URL } from '../utils/utils'

const AppAxios = axios.create({
    baseURL:API_URL,
    timeout:1000,
    headers:{}
})

const RequestHandler = request=>{
    request.headers.Authorization = `Bearer ${getToken()}`
    console.log('Request is called')
}

const ResponseHandler = response=>{
    if(response.status===401){
        console.log('Authorization is needed')
    }
    console.log('Response called')
}

const ErrorHandler = error=>{
    return Promise.reject(error)
}

AppAxios.interceptors.request.use((request)=>RequestHandler(request),(error)=>ErrorHandler(error))

AppAxios.interceptors.response.use((response)=>ResponseHandler(response),(error)=>ErrorHandler(error))

export default AppAxios


