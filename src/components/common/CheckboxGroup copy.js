import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useField } from 'formik'
import { FormControlLabel, Checkbox, FormHelperText, FormGroup } from '@mui/material'

const CheckboxWrapper = styled.div`
  margin-bottom: 10px;
`

const CheckboxGroup = (props) => {
  const [field, meta] = useField(props)
  console.log('IN CHECKBOX GROUP')
  return (
    <CheckboxWrapper>
      HERE IT IS
      <FormGroup>
        {props.selectOptions.map((option) => (
          <FormControlLabel
            key={option.id}
            control={
              <Checkbox
                checked={false}
                // onChange={option.onChange}
                name={option.id}
                id={option.id}
                color="secondary"
                {...field}
              />
            }
            label={option.displayText}
          />
        ))}
      </FormGroup>
      <FormHelperText error={true}>{meta.touched && meta.error}</FormHelperText>
    </CheckboxWrapper>
  )
}

CheckboxGroup.propTypes = {
  // id: PropTypes.string,
  // label: PropTypes.string.isRequired,
  // name: PropTypes.string,
  // value: PropTypes.string,
  // onChange: PropTypes.func,
  selectOptions: PropTypes.array,
}

export default CheckboxGroup
