import { User_SIGN_UP_REQUEST, User_SIGN_UP_SUCCESS,
   User_SIGN_IN_REQUEST} from '../../models/user';

import {signUpService, signInService, signOutService, getUSerFavs} from "../../services/user-service";

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
} from "../action-types";

//Sign up action creators
const signUpRequest = () => {
  return {
    type: SIGN_UP_REQUEST,
  };
};
const signUpSuccess = (user : User_SIGN_UP_SUCCESS) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      user,
    },
  };
};

export const signUp = (user : User_SIGN_UP_REQUEST, history : any ) => {
  return async function (dispatch : any) {
    await dispatch(signUpRequest());
    try {
      const response = await signUpService(user);
      const  data  = response.data;
      if (data.success){
        await dispatch(signUpSuccess(data));
        history.push("/");
      } else {
        return data.error;
      }
    } catch (error){
      return error.toString();
    }
  };
};

//Sign in action creators
const signInRequest = () => {
  return {
    type: SIGN_IN_REQUEST,
  };
};
const signInSuccess = (token : string, email: string) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      token,
      email
    },
  };
};

export const signIn = (payload: User_SIGN_IN_REQUEST, history : any) => {
  return async function (dispatch : any) {
    await dispatch(signInRequest);
    try{
      const response = await signInService(payload);
      const data  = response.data;
      if (data.success){
        const token  = data.token;
        const email = data.email;
        localStorage.setItem("USER-TOKEN", token);
        localStorage.setItem("USER-EMAIL", email);
        await dispatch(signInSuccess(token,email));
        history.push("/");
      }else{
        return data.error;
      }
    }
    catch(error) {
      return error.toString();
    }
  };
};

//sign out action creators
export const signOutRequest = function () {
  return {
    type: SIGN_OUT_REQUEST,
  };
};

export const signOutSuccess = function () {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = function () {
  return {
    type: SIGN_OUT_FAILURE,
  };
};

export const signOut = function (history : any) {
  return async function (dispatch : any) {
    await dispatch(signOutRequest());
    await signOutService();
    history.push("/");
    if (localStorage.getItem("USER_TOKEN")) {
      await dispatch(signOutFailure());
    } else {
      await dispatch(signOutSuccess());
    }
  };
};

