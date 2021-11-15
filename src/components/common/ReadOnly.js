import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
// import { useField } from 'formik'
import { useFormikContext, useField } from "formik";
import {
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Typography,
  InputLabel,
} from "@mui/material";

const ReadOnly = (props) => {
  const formik = useFormikContext();
  const [field, meta] = useField(props);

  return (
    <div style={{ textAlign: "left", marginTop: "10px", marginBottom: "10px" }}>
      <InputLabel id={props.id}>{props.label}</InputLabel>
      <Typography variant="body1">{field.value}</Typography>

      {/* <FormHelperText error={true}>{meta.touched && meta.error}</FormHelperText> */}
    </div>
  );
};

ReadOnly.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default ReadOnly;
