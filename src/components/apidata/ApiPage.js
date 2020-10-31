import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import {  loadData  }  from "../../redux/thunks/thunks";
import { getData } from "../../selectors/selectors";
import ApiList from './ApiList';
const ApiPage = ({ loadData, data }) => {
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {data.length === 0  ? (
        <Spinner />
      ) : (
        <>
         {/* {console.log(data)} */}
              <ApiList data={data} />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    data : state.data
  }
};
const mapDispatchToProps = {
  loadData
};
// ApiPage.propTypes = {
//  loadData: PropTypes.func.isRequired,
//  data: PropTypes.array.isRequired,
// };

export default connect(mapStateToProps,mapDispatchToProps)(ApiPage);
