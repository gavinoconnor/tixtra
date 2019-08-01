import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const VenueCard = (props) => {
  return (
    <div>
      <Grid item xs={8}>
      <Card className="venue-card" style={{ height: 400, width: 350, margin: "2vw", display: "flex", flexDirection: "column", backgroundColor: "#37474F", textAlign:"center"}}>
        <CardMedia
          style={{paddingTop: "56.25%"}}
          className="venue-avatar"
          image={props.avatar} alt={props.title}
          title={props.name}
        />
        <CardContent className="venue-content" style={{backgroundColor: "#37474F"}}>
          <Typography variant="h5" component="h2" style={{justifyContent:"center", color: "white"}}>
            {props.name}
          </Typography>
          {/* <Typography>
            {<span>{props.address}</span>}<br />
            {<span>{props.city}</span>},&nbsp;
            {<span>{props.state}</span>}
          </Typography> */}
        </CardContent>
        <CardActions style={{justifyContent:"center", paddingBottom:"15%"}}>
          <Link to={`/venues/${props.id}`}>
          <Button size="small" style={{color: "white"}}>
            Venue Details
          </Button>
          </Link>
        </CardActions>
      </Card>
      </Grid>
    </div>
  )
};

export default VenueCard;
