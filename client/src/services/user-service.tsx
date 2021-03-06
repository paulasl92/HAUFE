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

export const updateUserFavs = (favoriteList) =>{
  const data = {
    email: localStorage.getItem("USER-EMAIL"),
    fav: favoriteList
  };
  return postRequest(data,"/fav/updateCharacters")
}

export const getUSerFavs = (e) =>{
  const data = {
    email: e,
  };
  return postRequest(data,"/fav/getUserFav");
}