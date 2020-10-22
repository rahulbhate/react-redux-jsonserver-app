import * as types from "./actionTypes";

export const loadDataInProgress = () => {
   return {
    type: types.LOAD_DATA_IN_PROGRESS
   } 
}

export const loadDataSuccess = (data) => {
    console.log(data);
    return {
     type: types.LOAD_DATA_SUCCESS,
     data
    } 
 }
 export const loadDataFailure = () => {
    return {
     type: types.LOAD_DATA_FAILURE,
    } 
 }

 export const incrementCounter = () =>{
    return {
       type: types.INCREMENT_COUNTER,
    }
 }

 export const decrementCounter = () =>{
   return {
      type: types.DECREMENT_COUNTER,
   }
}