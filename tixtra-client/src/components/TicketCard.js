import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



const TicketCard = (props) => {
  const classes = useStyles();
  // console.log("ticket card:", props.currentUser.tickets)
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.avatar}
          title="avatar_url"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.artist}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="small" color="primary">
          Ticket Available
        </Button>

        <Button size="small" color="primary">
          Ticket Unavailable
        </Button>

        <Button size="small" color="primary">
          Request Ticket
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  viewedUser: state.viewedUser,
  tickets: state.tickets
})

export default connect(mapStateToProps)(TicketCard);
