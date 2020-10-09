
export const LOAD_CUSTOMERS_SUCCESS = "LOAD_CUSTOMERS_SUCCESS";
export const CREATE_CUSTOMER_SUCCESS = "CREATE_CUSTOMER_SUCCESS";
export const UPDATE_CUSTOMER_SUCCESS = "UPDATE_CUSTOMER_SUCCESS";


export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";
export const SEARCH_FILTER = "SEARCH_FILTER";
export const FILTER_TEXT = "FILTER_TEXT";
export const SORT_BY = "SORT_BY";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_CUSTOMER_OPTIMISTIC = "DELETE_CUSTOMER_OPTIMISTIC";
