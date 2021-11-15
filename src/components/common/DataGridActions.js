import React from 'react'
import PropTypes from 'prop-types'
import CustomButton from './Button'
import styled from 'styled-components'
import { Grid } from '@mui/material'

const CardActionGrid = styled(Grid)`
  && {
    margin: 10px 0 0 0;
    display: flex;
    justify-content: flex-end;
  }
`

const DataGridActions = ({ actionItems }) => {
  return (
    <CardActionGrid container>
      {actionItems.map((item, index) => {
        const ButtonIcon = item.startIcon
        return (
          <CustomButton
            key={index}
            variant="outlined"
            color="inherit"
            size="small"
            onClick={item.clickHandler}
            startIcon={<ButtonIcon />}
            label={item.label}
          />
        )
      })}
    </CardActionGrid>
  )
}

DataGridActions.propTypes = {
  actionItems: PropTypes.arrayOf(PropTypes.object),
}

export default DataGridActions
