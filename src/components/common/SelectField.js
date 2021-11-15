import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import makeStyles from '@mui/styles/makeStyles';
import { Select, InputLabel, FormControl } from '@mui/material'

import { useField } from 'formik'

const StyledSelect = styled(Select)`
  && {
    .MuiInputBase-root {
      border-radius: 10px;
    }
    // .MuiSelect-outlined {
    //   padding-right: 20px;
    // }
    // .MuiOutlinedInput-input {
    //   padding: 10px 6px;
    // }
  }
`
const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const SelectField = ({ label, ...props }) => {
  const classes = useStyles()
  const [field, meta] = useField(props)
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={props.id}>{label}</InputLabel>
      <StyledSelect
        native
        fullWidth
        variant="outlined"
        name={props.name}
        label={label}
        size="small"
        margin="normal"
        {...field}
        {...props}
        value={props.value}
        // onChange={handleChange}
        inputProps={{
          id: props.id,
        }}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      ></StyledSelect>
    </FormControl>
  )
}

SelectField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
}

export default SelectField
