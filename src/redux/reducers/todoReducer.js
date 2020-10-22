import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function todoReducer(state = initialState.todos, action) {
  switch (action.type) {
    case types.CREATE_TODO:
      return [...state, action.text];
    case types.REMOVE_TODO:
        return state.filter(todo => todo !== action.text);
    case types.COMPLETED_MARK_TODO:
        return state.map(todo => {todo == action.text ?  {...todo, isCompleted: true} : todo});
    default:
      return state;
  }
}
