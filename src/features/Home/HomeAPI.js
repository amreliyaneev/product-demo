import axios from "axios"

export const getAllDataApi = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/products`)
}