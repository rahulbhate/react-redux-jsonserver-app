import * as customerApi from "../../api/customerApi";
import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function createCustomerSuccess(customer) {
  return { type: types.CREATE_CUSTOMER_SUCCESS, customer };
}

export function updateCustomerSuccess(customer) {
  return { type: types.UPDATE_CUSTOMER_SUCCESS, customer };
}

export function searchCustomer(customer) {
  return { type: types.SEARCH_FILTER, customer };
}
function loadCustomersSuccess(customers) {
  return { type: types.LOAD_CUSTOMERS_SUCCESS, customers };
}
export function deleteCustomerOptimistic(customer) {
  return { type: types.DELETE_CUSTOMER_OPTIMISTIC, customer };
}
/* First Redux Thunk middleware to handle async call - middleware 
which is function.
This is optional - we can use fetch or axios library to handle 
//async calls to API */

export function loadCustomers() {
  console.log("Load Customers Called");
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return customerApi
      .getCustomers()
      .then(customers => {
        dispatch(loadCustomersSuccess(customers));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveCustomer(customer) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return customerApi
      .saveCustomer(customer)
      .then(savedCustomer => {
        customer.id
          ? dispatch(updateCustomerSuccess(savedCustomer))
          : dispatch(createCustomerSuccess(savedCustomer));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCustomer(customer) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteCustomerOptimistic(customer));
    return customerApi.deleteCustomer(customer.id);
  };
}
