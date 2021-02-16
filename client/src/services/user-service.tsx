import {postRequest, postRequestToken} from "./axios";

export const signUpService = (user) =>{
  return postRequest(user, "/signUp");
}

export const signInService = (payload) =>{
  return postRequestToken(payload, "/signIn");  
}

export const signOutService = () =>{
    localStorage.clear();
}