import makeStyles from '@mui/styles/makeStyles';
import { Button, Card, CardActionArea, CardActions, CardMedia } from '@mui/material'

const useStyles = makeStyles({
  root: {
    width: 337
  }
})


const MyCard = () => {
  const classes = useStyles()
  
  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1521058001910-55b77aba2203?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"
      />
      <CardActions>
        <Button size="small" color="primary">
          SHARE
        </Button>
      </CardActions>
    </CardActionArea>
  </Card>
  )
}

export default MyCard;