import { updateUserFavs , getUSerFavs} from "../../services/user-service";
 
 import {
   UPDATE_USER_FAVS,
   UPDATE_USER_FAVS_REQUEST
 } from "../action-types";
 
 
 const updateUserFavsRequest = () => {
   return {
     type: UPDATE_USER_FAVS_REQUEST,
   };
 };
 
 const updateUserFavsSuccess = ( favs : number[]) => {
   return {
     type: UPDATE_USER_FAVS,
     payload: {
       favs
     }
   }
 }
 
 export const updateUserFavsAction = ( favs: number[] ) => {
   return async function (dispatch : any) {
     await dispatch(updateUserFavsRequest());
     try {
       const response = await updateUserFavs(favs);
       const  data  = response.data;
       if (data.success){
         await dispatch(updateUserFavsSuccess(data.data));
       } else {
         return data.error;
       }
     } catch (error){
       return error.toString();
     }
   };
 };
 
 export const initUserFavsAction = (email) => {
  return async function (dispatch : any) {
    await dispatch(updateUserFavsRequest());
    try {
      const response = await getUSerFavs(email);
      const  data  = response.data;
      if (data.success){
        await dispatch(updateUserFavsSuccess(data.data));
      } else {
        return data.error;
      }
    } catch (error){
      return error.toString();
    }
  };
};

 
 