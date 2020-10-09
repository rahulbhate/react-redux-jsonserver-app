import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadCustomers, saveCustomer } from "../../redux/actions/customerActions";
import PropTypes from "prop-types";
import CustomerForm from "./CustomerForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { newCustomer } from "../../../tools/mockData";
const ManageCustomerPage = ({
  customers,
  loadCustomers,
  saveCustomer,
  history,
  ...props
}) => {
  const [customer, setCustomer] = useState({ ...props.customer });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    console.log("Use Effect Hook Called");
    if (customers.length === 0) {
      loadCustomers().catch(error => {
        alert("Loading customers failed" + error);
      });
    } else {
      setCustomer({ ...props.customer });
    }

  }, [props.customer]);
  function handleChange(event) {
    const { name, value } = event.target;
    setCustomer(prevCustomer => ({
      ...prevCustomer,
      [name]:
        name === "authorId" || name === "categoryId"
          ? parseInt(value, 10)
          : value
    }));
    console.log(customer);
  }
  
  function formIsValid() {
    const { firstName, lastName, birthDate } = customer;
    const errors = {};

    if (!firstName) errors.firstname = "First Name is required.";
    if (!lastName) errors.lastname = "Last Name is required";
    if (!birthDate) errors.birthdate = "Birth Date is required";
    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave() {
    event.preventDefault();
    if (!formIsValid()) return;
      setSaving(true);
      saveCustomer(customer)
        .then(() => {
          toast.info("Customers Saved Successfully");
          history.push("/customers");
        })
        .catch(error => {
          setSaving(false);
          setErrors({ onSave: error.message });
        });
  }
  return customers.length === 0  ? (
    <Spinner />
  ) : (
    <div className='mw6 center bg-white br3 pa3 pa5-ns mv5 ba b--black-7'>
      <CustomerForm
        customer={customer}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    </div>
  );
};
export function getCustomersBySlug(customer, slug) {
  return customer.find(customer => customer.firstName === slug) || null;
}
const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  console.log(slug);
  const customer =
    slug && state.customers.length > 0
      ? getCustomersBySlug(state.customers, slug)
      : newCustomer;
  return {
    customer,
    customers: state.customers,
  };
};
const mapDispatchToProps = {
  loadCustomers,
  saveCustomer,
};
ManageCustomerPage.propTypes = {
  customers: PropTypes.array.isRequired,
  loadCustomers: PropTypes.func.isRequired,
  saveCustomer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCustomerPage);
