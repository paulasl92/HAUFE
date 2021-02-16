import axios from "axios";

import {apiBase} from "../services/api-const";

export const signUpService = (user) =>{
    return axios({
        baseURL: apiBase,  
        method: "post",
        url: "/signUp",
        data: user,
      })
}


export const signInService = (payload) =>{
    return axios({
        baseURL: apiBase,  
        method: "post",
        url: "/signIn",
        data: payload,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("USER-TOKEN")}`,
        },
      })
    }

export const signOutService = () =>{
    localStorage.clear();
}