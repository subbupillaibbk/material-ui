import React from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components'
import { Input } from "@mui/material";

// const StyledInput = styled(TextField)`
//   && {
//     .MuiInputBase-root {
//       border-radius: 10px;
//     }
//   }
// `

const InputField = (props) => {
  return (
    <Input
      fullWidth
      variant="outlined"
      id={props.id}
      name={props.name}
      label={props.label}
      size={props.size}
      type={props.type}
      margin="normal"
      required={props.required}
    />
  );
};

export default InputField;
