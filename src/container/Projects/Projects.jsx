import React from 'react'
import './Projects.css'
import { images } from '../../constants'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Projects = () => {
  return (
    <div className='app-projects' id='projects'>
    <Card sx={{ maxWidth: 345 }} className="card-no-1">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={images.tesla}
          alt="tesla clone"
        />
        <CardContent className='card-content-1'>
          <Typography gutterBottom variant="h5" component="div">
            Tesla Clone
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created a Small Tesla Clone Website Using React.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{window.location='https://tesla-clone-bg-1b190.web.app/'}}>
          Visit
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
        <Button size="small" color="primary" onClick={()=>{window.location='https://www.google.com/search?q=leo+messi'}}>
          Goat
        </Button>
      </CardActions>
    </Card>

    </div>
  )
}


export default Projects