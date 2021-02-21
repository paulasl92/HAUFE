import jwt from "jsonwebtoken";

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
  UPDATE_USER_FAVS,
  UPDATE_USER_FAVS_REQUEST
} from "../action-types";

export const isValidToken = (token) => {
  let decoded = jwt.decode(token);
  return new Date(decoded.exp * 1000) > new Date() ? decoded : null;
};
const initState = {
  currentUser: localStorage.getItem("USER-TOKEN")
    ? isValidToken(localStorage.getItem("USER-TOKEN"))
    : null,
  token: localStorage.getItem("USER-TOKEN")
    ? localStorage.getItem("USER-TOKEN")
    : null,
  loading: false,
  isAuthenticated: false,
  email: localStorage.getItem("USER-EMAIL")
  ? localStorage.getItem("USER-EMAIL")
  : null,
  favs: []
};

const authenticationReducer = function (state = initState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
    case SIGN_UP_REQUEST:
    case SIGN_OUT_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        currentUser: null,
        isAuthenticated: false,
      };
    case SIGN_UP_SUCCESS: return { 
      ...state,
      isAuthenticated: false,
      loading: false,
      currentUser: null,
      token: "" ,
      email:"",
      favs: []
    };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        currentUser: action.payload.user,
        isAuthenticated: true,
        email: action.payload.email
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        currentUser: null,
        token: "",
        email: "",
        favs: []
      };
    case UPDATE_USER_FAVS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case UPDATE_USER_FAVS:
      return{
        ...state,
        favs: action.payload.favs,
        loading: false
      };
    default:
      return { ...state };
  }
};

export default authenticationReducer;

export const getPagesCount = (state) =>{
  return state.charactersReducer.pages;
}