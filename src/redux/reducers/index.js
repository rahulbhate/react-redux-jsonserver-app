import { combineReducers } from "redux";
import customers from "./customerReducer";
import images from "./imagesReducer";
import filtersReducer from "./filters";
import data from "./apiDataReducer";
import counter from "./counterReducer";
import todo from "./todoReducer";
import apiCallsInProgress from "./apiStatusReducer";
const rootReducer = combineReducers({
  customers: customers,
  filters: filtersReducer,
  images: images,
  data: data,
  counter: counter,
  todo: todo,
  apiCallsInProgress: apiCallsInProgress
});

export default rootReducer;
