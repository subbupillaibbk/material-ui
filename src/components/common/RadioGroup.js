import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useField } from "formik";
import {
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Radio,
  InputLabel,
} from "@mui/material";

const RadioGroupWrapper = styled.div`
  margin-bottom: 0px;
  margin-top: 10px;
  margin-left: 5px;
`;

const CustomRadioGroup = (props) => {
  const [field, meta] = useField(props);
  return (
    <RadioGroupWrapper>
      {/* <FormLabel component="">{props.label}</FormLabel> */}
      <InputLabel disableAnimation={true} htmlFor={props.id}>
        {props.label}
      </InputLabel>
      {/* <div className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-shrink">{props.label}</div> */}
      <RadioGroup
        id={props.id}
        {...field}
        {...props}
        aria-label={props.label}
        row
      >
        {props.options.map((radioItem, index) => (
          <FormControlLabel
            key={index}
            labelPlacement="end"
            value={radioItem.value}
            control={<Radio size="small" />}
            label={radioItem.label}
          />
        ))}
      </RadioGroup>

      <FormHelperText error={true}>{meta.error}</FormHelperText>
    </RadioGroupWrapper>
  );
};

CustomRadioGroup.propTypes = {
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  isformik: PropTypes.string,
};

CustomRadioGroup.defaultProps = {
  isformik: "true",
};

export default CustomRadioGroup;
