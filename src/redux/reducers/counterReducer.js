import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function counterReducer(state = initialState.counter, action) {
//console.log(state);
  switch (action.type) {
    case types.INCREMENT_COUNTER: 
    return   state + 1;
    case types.DECREMENT_COUNTER: 
    return   state - 1;
    default:
      return state;
  }
}
