import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
// import { useField } from 'formik'
import { useFormikContext, useField } from "formik";
import { FormControlLabel, Checkbox, FormHelperText } from "@mui/material";

const CustomCheckbox = (props) => {
  const formik = useFormikContext();
  const [field, meta] = useField(props);
  const onChange = (e) => {
    formik.setFieldValue(props.name, !field.value);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={field.value}
            onChange={onChange}
            name={props.name}
            id={props.id}
            color="secondary"
            // {...field}
          />
        }
        label={props.label}
      />
      {/* <FormHelperText error={true}>{meta.touched && meta.error}</FormHelperText> */}
    </div>
  );
};

CustomCheckbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default CustomCheckbox;
