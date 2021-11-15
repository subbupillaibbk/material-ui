import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useField } from 'formik'
import { FormControlLabel, Checkbox, FormHelperText } from '@mui/material'

const CheckboxWrapper = styled.div`
  margin-bottom: 10px;
`

const CustomCheckbox = (props) => {
  const [field, meta] = useField(props)
  return (
    <CheckboxWrapper>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.value}
            onChange={props.onChange}
            name={props.name}
            id={props.id}
            color="secondary"
            {...field}
          />
        }
        label={props.label}
      />
      <FormHelperText error={true}>{meta.touched && meta.error}</FormHelperText>
    </CheckboxWrapper>
  )
}

CustomCheckbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default CustomCheckbox
