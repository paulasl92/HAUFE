import { polyfill } from 'es6-promise'; 
import axios from "axios";
import {apiBase} from "../services/api-const";
polyfill();
export const postRequestToken = (data, url) =>{
    return axios({
        baseURL: apiBase,  
        method: "post",
        url: url,
        data: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("USER-TOKEN")}`,
        },
    })
}

export const postRequest = (data, url) =>{
     return axios({
            baseURL: apiBase,  
            method: "post",
            url: url,
            data: data
        })
}

export const getRequest = (url) =>{
    return axios({
           baseURL: apiBase,  
           method: "get",
           url: url,
       })
}
