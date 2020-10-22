import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function apiDataReducer(state = initialState.data, action) {
  switch (action.type) {
    case types.LOAD_DATA_IN_PROGRESS:
      return true;
    case types.LOAD_DATA_SUCCESS:
        return  action.data;
    case types.LOAD_DATA_FAILURE:
    default:
      return state;
  }
}
