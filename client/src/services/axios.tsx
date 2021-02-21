import axios from "axios";
import {apiBase} from "../services/api-const";

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

export const getRequestData = (url,data) =>{
    return axios({
           baseURL: apiBase,  
           method: "get",
           url: url,
           data: data
       })
}