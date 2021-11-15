import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '@mui/material'

const StyledButton = styled(Button)`
  && {
    border-radius: 50px;
    padding-left: 12px;
    padding-right: 12px;
    min-width: 146px;
    height: 41px;
    margin: 10px;
    ${({ theme, variant }) => variant === 'outlined' && `border: 2px solid ${theme.colorList.gray}`}
  }
`

const CustomButton = (props) => {
  return (
    <StyledButton type={props.type} variant={props.variant} {...props}>
      {props.label}
    </StyledButton>
  )
}

CustomButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
}

CustomButton.defaultProps = {
  variant: 'contained',
}

export default CustomButton
