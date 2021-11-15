import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useField } from "formik";
import {
  FormControlLabel,
  Checkbox,
  FormHelperText,
  FormGroup,
  Input,
} from "@mui/material";

const CheckboxWrapper = styled.div`
  margin-bottom: 10px;
`;

const CheckboxGroup = (props) => {
  const [field, meta] = useField(props);

  const tuples = props.selectOptions.map((option) => [
    option.displayText,
    false,
  ]);
  const initialState = Object.fromEntries(tuples);

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    let value = "";
    Object.keys(state).forEach((key) => {
      if (state[key]) {
        console.log(key, state[key]);
        value = value.concat(key, ",");
      }
    });

    props.setFieldValue(props.label, value);
  }, [state]);

  return (
    <CheckboxWrapper>
      <FormGroup>
        {props.selectOptions.map((option) => (
          <FormControlLabel
            key={option.id}
            control={
              <Checkbox
                checked={state[option.displayText]}
                name={option.displayText}
                onChange={handleChange}
                color="secondary"
              />
            }
            label={option.displayText}
          />
        ))}
      </FormGroup>
      <FormHelperText error={true}>{meta.touched && meta.error}</FormHelperText>
      {/* <pre>{JSON.stringify(state)}</pre> */}
    </CheckboxWrapper>
  );
};

CheckboxGroup.propTypes = {
  // id: PropTypes.string,
  // label: PropTypes.string.isRequired,
  // name: PropTypes.string,
  // value: PropTypes.string,
  // onChange: PropTypes.func,
  selectOptions: PropTypes.array,
};

export default CheckboxGroup;
