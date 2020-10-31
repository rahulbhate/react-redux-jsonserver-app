import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadImages } from "../../redux/thunks/thunks";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import SliderList from './SliderList';

const SlidersPage = ({
  loadImages,
  images,
}) => {
 
  useEffect(() => {
    loadImages();
  }, []);
  
  return (
    <>
      {images.length === 0  ? ( <Spinner />) : (
        <>
          <SliderList images={images}/>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    images: state.images,
  };
};
const mapDispatchToProps = {
  loadImages
};
SlidersPage.propTypes = {
  images: PropTypes.array.isRequired,
  loadImages: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SlidersPage);
