import * as imagesApi from "../../api/imagesApi";
import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";


function loadImagesSuccess(images) {
  return { type: types.LOAD_IMAGES_SUCCESS, images };
}

/* First Redux Thunk middleware to handle async call - middleware 
which is function.
This is optional - we can use fetch or axios library to handle 
//async calls to API */

export function loadImages() {
  console.log("Load Images Called");
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return imagesApi
      .getImages()
      .then(images => {
        dispatch(loadImagesSuccess(images));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}