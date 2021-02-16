import {User_SIGN_UP_FAILURE, User_SIGN_UP_REQUEST, User_SIGN_UP_SUCCESS,
  User_SIGN_IN_FAILURE, User_SIGN_IN_REQUEST} from '../models/user';

import {signUpService, signInService, signOutService} from "../services/user-service"

import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
} from "./action-types";

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
const signUpFailure = (error : User_SIGN_UP_FAILURE) => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};

export const signUp = (user : User_SIGN_UP_REQUEST, history : any ) => {
  return async function (dispatch : any) {
    dispatch(signUpRequest());
    try {
      const response = await signUpService(user);
      const { data } = response.data;
      dispatch(signUpSuccess(data));
      history.push("/");
    } catch (error){
      dispatch(signUpFailure(error.toString()));
    }
  };
};

//Sign in action creators
const signInRequest = () => {
  return {
    type: SIGN_IN_REQUEST,
  };
};
const signInSuccess = (token : string) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      token,
    },
  };
};
const signInFailure = (error: User_SIGN_IN_FAILURE) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};

export const signIn = (payload: User_SIGN_IN_REQUEST, history : any) => {
  return async function (dispatch : any) {
    dispatch(signInRequest);
    try{
      const response = await signInService(payload);
      const { token } = response.data;
      localStorage.setItem("USER-TOKEN", token);
      dispatch(signInSuccess(token));
      history.push("/home");
    }
    catch(error) {
      dispatch(signInFailure(error.toString()));
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
    dispatch(signOutRequest());
    const response = await signOutService();
    history.push("/signin");
    if (localStorage.getItem("USER_TOKEN")) {
      dispatch(signOutFailure());
    } else {
      dispatch(signOutSuccess());
    }
  };
};