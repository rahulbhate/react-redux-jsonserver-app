import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function customerReducer(state = initialState.customers, action) {
  switch (action.type) {
    case types.CREATE_CUSTOMER_SUCCESS:
      console.log(action.customer);
      return [...state, { ...action.customer }];
    case types.UPDATE_CUSTOMER_SUCCESS:
      return state.map(customer =>
        customer.id === action.customer.id ? action.customer : customer
      );
    case types.SEARCH_FILTER: {
      let filteredCurrencies = state.filter(customer => {
        let filterString = customer.firstName.toLowerCase();
        return filterString.indexOf(action.customer.toLowerCase()) !== -1;
      });
      if (action.customer.length !== 0) {
        return filteredCurrencies;
      } else {
        alert("empty");
        return [...state];
      }
    }
    case types.LOAD_CUSTOMERS_SUCCESS:
      return action.customers;
    case types.DELETE_CUSTOMER_OPTIMISTIC:
      return state.filter(customer => customer.id !== action.customer.id);
    default:
      return state;
  }
}
