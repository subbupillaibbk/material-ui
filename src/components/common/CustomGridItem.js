import React from 'react'
import {Grid} from '@mui/material'

const CustomGridItem = (props) => {
  return (
    <Grid item xs={12} sm={12} md={12/props.columns} lg={12/props.columns} key={Math.random()}>
      <Grid container>
      {props.children}
      </Grid>
    </Grid>
  )
}

export default CustomGridItem