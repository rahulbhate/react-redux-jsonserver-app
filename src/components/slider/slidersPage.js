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
  
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    console.log("Use Effect Hook Called");
    if (images.length === 0) {
      loadImages().catch(error => {
        alert("Loading Images failed" + error);
      });
    }
  }, []);

  return (
    <>
      {props.loading ? (
        <Spinner />
      ) : (
        <>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">Thumbnail URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {images.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.url}</TableCell>
              <TableCell align="right">{row.thumbnailUrl}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
