import _ from "lodash";
import { createSelector } from "reselect";

const customersSelector = state => state.customers;

const selectedCustomersSelector = state => state.selectedCourseTitles;

const getCourses = (customers, selectedCourseTitles) => {
  const selectedCustomers = _.filter(customers, customer =>
    _.contains(selectedCourseTitles, customer.id)
  );
  return selectedCustomers;
};

export default createSelector(
  customersSelector,
  selectedCustomersSelector,
  getCourses
);
