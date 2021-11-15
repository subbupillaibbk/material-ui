import React from 'react'

import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

import InputField from './InputField'
import Dropdown from './Dropdown'
import Password from './Password'
import CustomRadioGroup from './RadioGroup'
import CustomCheckbox from './Checkbox'
import DateField from './DateField'
import CheckboxGroup from './CheckboxGroup'

const FormField = (props) => {
  let returnField = null

  switch (props.fieldType) {
    case 'text':
      console.log('TEXT FIELD')
      returnField = (
        <InputField
          id={props.id}
          data-testid={props.id}
          label={props.label}
          name={props.name}
          fieldconfig={props.fieldconfig}
          size="small"
          type="text"
        />
      )
      break
    case 'largeText':
      returnField = (
        <InputField
          id={props.id}
          data-testid={props.id}
          label={props.label}
          name={props.name}
          fieldconfig={props.fieldconfig}
          size="large"
          type="text"
        />
      )
      break
    case 'password':
      returnField = (
        <Password
          id={props.id}
          data-testid={props.id}
          label={props.label}
          name={props.name}
          fieldconfig={props.fieldconfig}
          size="small"
        />
      )
      break
    case 'select':
      returnField = (
        <Dropdown
          id={props.id}
          data-testid={props.id}
          label={props.label}
          name={props.name}
          options={props.selectOptions}
          fieldconfig={props.fieldconfig}
        />
      )
      break
    case 'radio':
      returnField = (
        <CustomRadioGroup
          id={props.id}
          data-testid={props.id}
          label={props.label}
          name={props.name}
          options={props.selectOptions}
          fieldconfig={props.fieldconfig}
        />
      )
      break
    case 'checkbox':
      returnField = (
        <CustomCheckbox
          id={props.id}
          data-testid={props.id}
          label={props.label}
          name={props.name}
          onChange={props.onChange}
          fieldconfig={props.fieldconfig}
        />
      )
      break
    case 'date':
      returnField = (
        <DateField
          id={props.id}
          data-testid={props.id}
          label={props.label}
          name={props.name}
          onChange={props.onChange}
          fieldconfig={props.fieldconfig}
        />
      )
      break
    case 'checkboxgroup':
      console.log('CHECKBOX GROUP')
      returnField = <CheckboxGroup selectOptions={props.selectOptions} />
      break

    default:
      returnField = <div>No matching control found</div>
      break
  }

  return (
    <Grid item xs={12} sm={12} md={props.width} lg={props.width} key={props.id}>
      {returnField}
    </Grid>
  )
}

FormField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  fieldType: PropTypes.string,
  selectOptions: PropTypes.array,
  width: PropTypes.number,
  onChange: PropTypes.func,
  fieldconfig: PropTypes.object,
}

FormField.defaultProps = {
  width: 12,
}
export default FormField

// const { key, ...rest } = props
