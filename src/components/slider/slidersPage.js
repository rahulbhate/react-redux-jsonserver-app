import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadImages
} from "../../redux/actions/imagesActions";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Button from '@material-ui/core/Button';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const SlidersPage = ({
  loadImages,
  images,
  ...props
}) => {
  
  const [loading, setloading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const classes = useStyles();
  useEffect(() => {
    console.log("Use Effect Hook Called");
    if (images.length === 0) {
      loadImages().catch(error => {
        alert("Loading Images failed" + error);
      });
    }
  }, []);
   const CarouselLeftArrow = () => {
      return (
        <a
          href="#"
          className="carousel__arrow carousel__arrow--left"
          onClick={() =>{}}
        >
        <span className="glyphicon glyphicon-arrow-left"></span>
        </a>
      );
  }
  const CarouselRightArrow = () => {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={() =>{}}
      >
      <span className="glyphicon glyphicon-arrow-right"></span>
      </a>
    );
}
  return (
    <>
      {props.loading ? (
        <Spinner />
      ) : (
        <>
      {images.map((row, index) => (
        currentIndex === index ? 
      <img src={row.thumbnailUrl} key={row.id}/> :null
      ))}
    <Button variant="contained" color="primary" onClick={()=> { setCurrentIndex(currentIndex + 1) }}>
  Previous
</Button>
<CarouselLeftArrow />
<Button variant="contained" color="secondary" onClick={()=> { setCurrentIndex(currentIndex + 1) }}>
  Next
</Button>
<CarouselRightArrow />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    images: state.images,
    loading: state.apiCallsInProgress > 0
  };
};
const mapDispatchToProps = {
  loadImages
};
SlidersPage.propTypes = {
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadImages: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SlidersPage);
