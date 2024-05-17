import axios from "axios"


export const LoginAPI = (values) => {
    return axios.post('https://dummyjson.com/auth/login',values,{headers : {
        'Content-Type' : 'application/json '
    }})
}
