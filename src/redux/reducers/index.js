import { combineReducers } from "redux";
import customers from "./customerReducer";
import images from "./imagesReducer";
import filtersReducer from "./filters";
import apiCallsInProgress from "./apiStatusReducer";
const rootReducer = combineReducers({
  customers: customers,
  filters: filtersReducer,
  images: images,
  apiCallsInProgress: apiCallsInProgress
});

export default rootReducer;
