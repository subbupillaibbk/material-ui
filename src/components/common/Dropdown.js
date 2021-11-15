import React from "react";
import PropTypes from "prop-types";
import {
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { useField } from "formik";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  border-radius: 10px;
`;

const Dropdown = (props) => {
  const { isformik, label, id, name, options, ...rest } = props;
  const [field, meta] = useField(props);
  if (props.isformik === "true") {
    return (
      <FormControl
        size="small"
        fullWidth
        variant="outlined"
        style={{ marginTop: "15px", marginBottom: "4px" }}
      >
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <StyledSelect
          labelId={id}
          id={id}
          name={name}
          {...field}
          {...props.fieldConfig}
          error={meta.touched && Boolean(meta.error)}
          label={label}
          {...rest}
        >
          <MenuItem key={-1} value={-1}>
            <em>None</em>
          </MenuItem>
          {options.map((item, index) => (
            <MenuItem key={index} value={item.id}>
              {item.displayText}
            </MenuItem>
          ))}
        </StyledSelect>
        <FormHelperText error={true}>
          {meta.touched && meta.error}
        </FormHelperText>
      </FormControl>
    );
  } else {
    return (
      <FormControl
        size="small"
        fullWidth
        variant="outlined"
        style={{ marginTop: "10px", marginBottom: "4px" }}
      >
        <InputLabel id={id}>{label}</InputLabel>
        <StyledSelect
          labelId={id}
          id={`${id}-select`}
          required
          label={label}
          {...props}
        >
          <MenuItem key={-1} value={-1}>
            <em>None</em>
          </MenuItem>
          {options.map((item, index) => (
            <MenuItem key={index} value={item.id}>
              {item.displayText}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    );
  }
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  isformik: PropTypes.string,
};

Dropdown.defaultProps = {
  isformik: "true",
};

export default Dropdown;
