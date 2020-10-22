import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import {  loadData  }  from "../../redux/thunks/thunks";
import { decrementCounter, incrementCounter } from "../../redux/actions/apidataActions";
const ApiPage = ({ loadData, incrementCounter, decrementCounter, counter, data, ...props }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
  }, []);
const handleIncrementCounter = () =>{
  incrementCounter();
}
const handleDecrementCounter = () =>{
  decrementCounter();
}
  return (
    <>
      {data.length === 0  ? (
        <Spinner />
      ) : (
        <>
         {/* {console.log(data)} */}
          <div className='fl w-100 bg-near-white tc'>
              LOAD API DATA...
             <button className="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-pink" onClick={handleIncrementCounter}>Increment Counter </button>
             <button className="f6 link dim br1 ph3 pv2 mb2 dib white bg-light-purple" onClick={handleDecrementCounter}>Decrement Counter </button>
             <p>{counter}</p>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    data : state.data,
    counter: state.counter
  }
};
const mapDispatchToProps = {
  loadData,
  incrementCounter,
  decrementCounter
};
ApiPage.propTypes = {
 loadData: PropTypes.func.isRequired,
 incrementCounter: PropTypes.func.isRequired,
 decrementCounter:PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(ApiPage);
