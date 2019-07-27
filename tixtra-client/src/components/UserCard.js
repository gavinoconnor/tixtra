import React from 'react';
// import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
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
    color: 'rgba(255, 255, 255, 0.45)',
  },
}));

// const userVariable =

const handleClick = () => {
  console.log("click")
  // if (props.userVariable)
  // userVariable = <UserProfile />
};

const UserCard = (props) => {
  const classes = useStyles();
    return (
      <div>
      <GridListTile key={props.id}>
        <img src={props.avatar} alt={props.username}/>
        <GridListTileBar
          title={props.username}
          subtitle={<span>"{props.bio}"</span>}
          actionIcon={
            <Link to={`/users/${props.id}`}>
              <IconButton aria-label={`info about ${props.username}`} className={classes.icon}>
                <InfoIcon />
              </IconButton>
            </Link>
          }
        />
      </GridListTile>
      </div>
    )
};

export default UserCard;
