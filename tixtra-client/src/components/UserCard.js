import React from 'react';
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

const UserCard = (props) => {
  console.log(props)
  const classes = useStyles();
    return (
      <div>
      <GridListTile key={props.id}>
        <img src={props.avatar} alt={props.username}/>
        <GridListTileBar
          title={props.username}
          subtitle={<span>"{props.bio}"</span>}
          actionIcon={
            <IconButton aria-label={`info about ${props.username}`} className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
      </div>
    )
};

export default UserCard;
