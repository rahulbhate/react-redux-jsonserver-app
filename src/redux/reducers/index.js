import { combineReducers } from "redux";
import customers from "./customerReducer";
import filtersReducer from "./filters";
import apiCallsInProgress from "./apiStatusReducer";
const rootReducer = combineReducers({
  customers: customers,
  filters: filtersReducer,
  apiCallsInProgress: apiCallsInProgress
});

export default rootReducer;
