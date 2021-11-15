import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormHelperText, TextField } from '@mui/material'
import { useField } from 'formik'

const DateFieldWrapper = styled.div`
  margin-bottom: 0px;
  margin-top: 0px;
  margin-left: 5px;
`

const DateField = (props) => {
  const [field, meta] = useField(props)
  return (
    <DateFieldWrapper>
      <TextField
        id={props.id}
        name={props.name}
        label={props.label}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        {...field}
        style={{ marginTop: '10px', marginBottom: '8px' }}
      />
      {/* <FormHelperText error={true}>{meta.touched && meta.error}</FormHelperText> */}
    </DateFieldWrapper>
  )
}

DateField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default DateField
