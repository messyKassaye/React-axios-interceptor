const TOKEN = "JWT_TOKEN"
export const isLogin =()=>{
    if(localStorage.getItem(TOKEN)){
        return true
    }

    return false
}

export const getToken =()=>{
    return localStorage.getItem(TOKEN)
}