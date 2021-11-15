import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TextField, FormHelperText, InputLabel, OutlinedInput, Typography } from '@mui/material'
import { useField } from 'formik'

const StyledInput = styled(TextField)`
  && {
    .MuiInputBase-root {
      border-radius: 10px;
    }
  }
`

const StyledOutlinedInput = styled(OutlinedInput)`
  margin-top: 15px;
`

const InputField = (props) => {
  const [field, meta] = useField(props)
  return props.size === 'large' ? (
    <div>
      <InputLabel disableAnimation={true} htmlFor={props.id}>
        <Typography variant="body2">{props.label}</Typography>
      </InputLabel>
      <StyledOutlinedInput fullWidth notched={false} id={props.id} name={props.name} type="text" {...field} />
      <FormHelperText error={true}>{meta.touched && meta.error}</FormHelperText>
    </div>
  ) : (
    <StyledInput
      fullWidth
      variant="outlined"
      id={props.id}
      name={props.name}
      label={props.label}
      size={props.size}
      type={props.type}
      margin="normal"
      required={props.required}
      {...props.fieldconfig}
      {...field}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.string,
  fieldconfig: PropTypes.object,
}

export default InputField
