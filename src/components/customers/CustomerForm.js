import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import Button from '../common/Button';
import Label from '../common/Label';
const CustomerForm = ({
  customer,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave} className='measure center'>
      <h2>{customer.id ? "Edit" : "Add"} Customer</h2>
      {errors.onSave && (
        <div className='alert alert-danger' role='alert'>
          {errors.onSave}
        </div>
      )}
      <Label htmlFor="firstname" label="First Name" required />
      <TextInput
        name='firstName'
        value={customer.firstName}
        onChange={onChange}
        error={errors.firstname}
      />
      <Label htmlFor="lastname" label="Last Name" required />
      <TextInput
        name='lastName'
        value={customer.lastName}
        onChange={onChange}
        error={errors.lastname}
      />
      <Label htmlFor="birthdate" label="Birth Date" required />
      <TextInput
        name='birthDate'
        type="date"
        value={customer.birthDate}
        onChange={onChange}
        error={errors.birthdate}
      />
      <Button type='submit' disabled={saving} className='btn btn-primary' title={saving ? "Saving..." : "Save"} />
    </form>
  );
};

CustomerForm.propTypes = {
  customer: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CustomerForm;
