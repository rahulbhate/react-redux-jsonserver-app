import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadCustomers,
  deleteCustomer,
  searchCustomer
} from "../../redux/actions/customerActions";
import getVisibleCustomers from "../../selectors/customers";
import PropTypes from "prop-types";
import CustomerList from "./CustomerList";
import Spinner from "../common/Spinner";
import Button from "../common/Button";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { getCustomers } from "../../api/customerApi";
const CustomersPage = ({
  loadCustomers,
  customers,
  deleteCustomer,
  searchCustomer,
  ...props
}) => {
  const [redirectToAddCustomerPage, setRedirectToAddCustomerPage] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("Use Effect Hook Called");
    if (customers.length === 0) {
      loadCustomers().catch(error => {
        alert("Loading customers failed" + error);
      });
    }
  }, []);

  const handleDeleteCourse = async customer => {
    toast.info("Customer deleted");
    try {
      await deleteCustomer(customer);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };
  return (
    <>
      {redirectToAddCustomerPage && <Redirect to='/customer' />}
      {props.loading ? (
        <Spinner />
      ) : (
        <>
          <div className='fl w-100 bg-near-white tc'>
            <Button
              title='Add Course'
              className='f6 no-underline grow dib v-mid bg-purple white ba b--light-purple ph3 pv2 mb3'
              type='primary'
              onClick={() => {
                setRedirectToAddCustomerPage({ redirectToAddCustomerPage: true });
              }}
            />
            <CustomerList onDeleteClick={handleDeleteCourse} customers={customers} />
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    customers: getVisibleCustomers(
      state.customers,
      state.filters
    ),
    //courses: selectedCoursesSelector(state),
    loading: state.apiCallsInProgress > 0
  };
};
const mapDispatchToProps = {
  loadCustomers,
  deleteCustomer,
  searchCustomer
};
CustomersPage.propTypes = {
  customers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadCustomers: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);
