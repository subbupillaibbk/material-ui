import React from 'react'
import PropTypes from 'prop-types'
import { InputLabel, Select, option, FormHelperText, FormControl } from '@mui/material'
import { useField } from 'formik'
import styled from 'styled-components'

const StyledSelect = styled(Select)`
  border-radius: 10px;
`

const DropdownNative = (props) => {
  if (props.isFormik) {
    const [field, meta] = useField(props)

    return (
      <FormControl size="small" fullWidth variant="outlined" style={{ marginTop: '14px', marginBottom: '4px' }}>
        <InputLabel htmlFor={`${props.id}-select`} id={props.id}>
          {props.label}
        </InputLabel>
        <StyledSelect
          native={true}
          data-testid={props.id}
          labelId={props.id}
          id={`${props.id}-select`}
          {...field}
          required
          error={meta.touched && Boolean(meta.error)}
          label={props.label}
        >
          <option key="" value=""></option>
          {props.options.map((item, index) => (
            <option key={index} value={item.id}>
              {item.displayText}
            </option>
          ))}
        </StyledSelect>
        <FormHelperText error={true}>{meta.touched && meta.error}</FormHelperText>
      </FormControl>
    )
  } else {
    return (
      <FormControl size="small" fullWidth variant="outlined" style={{ marginTop: '10px', marginBottom: '4px' }}>
        <InputLabel htmlFor={`${props.id}-select`} id={props.id}>
          {props.label}
        </InputLabel>
        <StyledSelect
          native={true}
          data-testid={props.id}
          labelId={props.id}
          id={`${props.id}-select`}
          required
          label={props.label}
          {...props}
        >
          <option key="" value=""></option>
          {props.options.map((item, index) => (
            <option key={index} value={item.id}>
              {item.displayText}
            </option>
          ))}
        </StyledSelect>
      </FormControl>
    )
  }
}

DropdownNative.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFormik: PropTypes.bool,
}

DropdownNative.defaultProps = {
  isFormik: true,
}

export default DropdownNative
