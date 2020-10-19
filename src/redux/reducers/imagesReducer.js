import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function imagesReducer(state = initialState.images, action) {
  switch (action.type) {
    case types.LOAD_IMAGES_SUCCESS:
      return action.images;
    default:
      return state;
  }
}
