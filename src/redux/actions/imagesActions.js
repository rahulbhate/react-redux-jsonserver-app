import * as types from "./actionTypes";

export const loadImagesInProgress = () => {
  return {
   type: types.LOAD_IMAGES_IN_PROGRESS
  } 
}

export const loadImagesSuccess = (images) => {
   console.log(images);
   return {
    type: types.LOAD_IMAGES_SUCCESS,
    images
   } 
}
export const loadImagesFailure = () => {
   return {
    type: types.LOAD_IMAGES_FAILURE,
   } 
}
