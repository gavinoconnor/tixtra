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
  gridListTile: {
    display: 'flex',
    flexWrap: 'row wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const EventCard = (props) => {
  const classes = useStyles();
    return (
      <div>
      <GridListTile className={classes.gridListTile} key={props.id}>
        <img src={props.avatar} alt={props.artist}/>
        <GridListTileBar
          title={props.name}
          subtitle={<span>{props.artist}</span>}
          actionIcon={
            <Link to={`/events/${props.id}`}>
            <IconButton aria-label={`info about ${props.artist}`} className={classes.icon}>
              <InfoIcon />
            </IconButton>
            </Link>
          }
        />
      </GridListTile>
      </div>
    )
};

export default EventCard;
