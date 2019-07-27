import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const VenueCard = (props) => {
  console.log(props)
  const classes = useStyles();
    return (
      <div>
      <GridListTile key={props.id}>
        <img src={props.avatar} alt={props.title}/>
        <GridListTileBar
          title={props.name}
          subtitle={<span>"{props.name}"</span>}
          actionIcon={
            <Link to={`/venues/${props.id}`}>
            <IconButton aria-label={`info about ${props.title}`} className={classes.icon}>
              <InfoIcon />
            </IconButton>
          </Link>
          }
        />
      </GridListTile>
      </div>
    )
};

export default VenueCard;
