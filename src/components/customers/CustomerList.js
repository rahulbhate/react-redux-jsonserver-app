import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CustomerFilters from "./CustomerFilters";
const CustomerList = ({ customers, onDeleteClick }) => {
  return (
    <>
      <CustomerFilters />
      <table className='table table-bordered table-light table-striped'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Date</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => {
            return (
              <tr key={customer.id}>
                <td>
                  <Link to={"/customer/" + customer.firstName}>{customer.firstName}</Link>
                </td>
                <td>
                <Link to={"/customer/" + customer.firstName}>{customer.lastName}</Link>
                </td>
                <td>{customer.birthDate}</td>
                <td>
                  <button
                    className='btn btn-outline-danger'
                    onClick={() => onDeleteClick(customer)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CustomerList;
