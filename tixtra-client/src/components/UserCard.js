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
    color: 'rgba(255, 255, 255, 0.54)',
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

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
//
// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });
//
// const UserCard = (props) => {
//   const classes = useStyles();
//     return (
//       <Card className={classes.card}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image={props.avatar}
//             title="User Photo"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {props.username}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               {props.bio}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             See profile
//           </Button>
//         </CardActions>
//       </Card>
//     );
//   }
//
//
// export default UserCard;
