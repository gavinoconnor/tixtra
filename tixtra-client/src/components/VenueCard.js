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
      <Card className="venue-card" style={{ height: 375, width: 250, margin: "2vw", display: "flex", flexDirection: "column" }}>
        <CardMedia
          style={{paddingTop: "56.25%"}}
          className="venue-avatar"
          image={props.avatar} alt={props.title}
          title={props.name}
        />
        <CardContent className="venue-content">
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography>
            {<span>{props.address}</span>}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/venues/${props.id}`}>
          <Button size="small" color="primary">
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

// import React from 'react';
// import { Link } from 'react-router-dom';
//
// import { makeStyles } from '@material-ui/core/styles';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
//
// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
//   icon: {
//     color: 'rgba(255, 255, 255, 0.54)',
//   },
// }));
//
// const VenueCard = (props) => {
//   console.log(props)
//   const classes = useStyles();
//     return (
//       <div>
//       <GridListTile key={props.id}>
//         <img src={props.avatar} alt={props.title}/>
//         <GridListTileBar
//           title={props.name}
//           subtitle={<span>"{props.name}"</span>}
//           actionIcon={
//             <Link to={`/venues/${props.id}`}>
//             <IconButton aria-label={`info about ${props.title}`} className={classes.icon}>
//               <InfoIcon />
//             </IconButton>
//           </Link>
//           }
//         />
//       </GridListTile>
//       </div>
//     )
// };
//
// export default VenueCard;
