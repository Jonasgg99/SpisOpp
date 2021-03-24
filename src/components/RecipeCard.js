import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import TimerIcon from '@material-ui/icons/Timer';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton'

const RecipeCard = ({ title, time, desc }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="recipe"
          height="100"
          title="recipe"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Box>
            <Typography gutterBottom variant="subtitle2">
              <TimerIcon />{time}m
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Se oppskrift
        </Button>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default RecipeCard