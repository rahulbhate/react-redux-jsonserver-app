
export const LOAD_CUSTOMERS_SUCCESS = "LOAD_CUSTOMERS_SUCCESS";
export const CREATE_CUSTOMER_SUCCESS = "CREATE_CUSTOMER_SUCCESS";
export const UPDATE_CUSTOMER_SUCCESS = "UPDATE_CUSTOMER_SUCCESS";

export const LOAD_IMAGES_IN_PROGRESS = "LOAD_IMAGES_IN_PROGRESS";
export const LOAD_IMAGES_SUCCESS = "LOAD_IMAGES_SUCCESS";
export const LOAD_IMAGES_FAILURE = "LOAD_IMAGES_FAILURE";

export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETED_MARK_TODO = "COMPLETED_MARK_TODO";

export const LOAD_DATA_IN_PROGRESS = "LOAD_DATA_IN_PROGRESS";
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";
export const LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE";

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

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
