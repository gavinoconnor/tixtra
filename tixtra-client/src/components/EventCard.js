import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const EventCard = (props) => {
  return (
    <div>
      <Grid item xs={8}>
      <Card className="event-card" style={{ height: 350, width: 250, margin: "2vw", display: "flex", flexDirection: "column" }}>
        <CardMedia
          style={{paddingTop: "56.25%"}}
          className="event-avatar"
          image={props.avatar} alt={props.username}
          title={props.artist}
        />
        <CardContent className="event-content">
          <Typography gutterBottom variant="h5" component="h2">
            {props.artist}
          </Typography>
          <Typography>
            {<span>{props.date}</span>}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/events/${props.id}`}>
          <Button size="small" color="primary">
            Event Details
          </Button>
          </Link>
        </CardActions>
      </Card>
      </Grid>
    </div>
  )
};

export default EventCard;
