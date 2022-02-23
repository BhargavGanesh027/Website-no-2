import React from 'react'
import './Projects.css'
import { images } from '../../constants'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, ImageList } from '@mui/material';

const Projects = () => {
  return (
    <div className='app-projects'>
    <Card sx={{ maxWidth: 345 }} className="card-no-1">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={images.messi1}
          alt="green iguana"
        />
        <CardContent className='card-content-1'>
          <Typography gutterBottom variant="h5" component="div">
            Leo a.k.a GOAT
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here he's again 
            here he's again
            that's astonishing!
            that's absolutely world class......
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Goat
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={images.messi1}
          alt="green iguana"
        />
        <CardContent className='card-content-2'>
          <Typography gutterBottom variant="h5" component="div">
            Leo a.k.a GOAT
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here he's again 
            here he's again
            that's astonishing!
            that's absolutely world class......
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Goat
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={images.messi1}
          alt="green iguana"
        />
        <CardContent className='card-content-3'>
          <Typography gutterBottom variant="h5" component="div">
            Leo a.k.a GOAT
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here he's again 
            here he's again
            that's astonishing!
            that's absolutely world class......
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Goat
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}


export default Projects