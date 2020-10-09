import React from "react";
import { connect } from "react-redux";
import DropDown from "../common/Dropdown";
import Label from "../common/Label";
import TextInput from "../common/TextInput";
import { filterText, sortBy } from "../../redux/actions/filters";
const arrays = ["firstname", "lastname"];
const CustomerFilters = props => (
  <div className='measure center'>
    <TextInput
      htmlId='example-optional'
      label='Search By Customer First Name and Last Name'
      placeholder='Search...'
      name='search'
      onChange={e => {
        props.dispatch(filterText(e.target.value));
      }}
    />
    <Label htmlFor='test' label='SORT BY' />
    <DropDown
      id='mySelection'
      name='customers'
      htmlFor='customers'
      placeholder='SORT BY'
      options={arrays}
      handleChange={e => props.dispatch(sortBy(e.target.value))}
      className='form-control'
    ></DropDown>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(CustomerFilters);
