import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class FriendCard extends React.Component {

  render() {
    console.log("FRIEND CARD:", this.props.friend)
    return (
      <div>
        <Grid item xs={8}>
        <Card className="user-card" style={{ height: 325, width: 250, margin: "2vw", display: "flex", flexDirection: "column", backgroundColor: "#37474F", textAlign: "center"}}>
          <CardMedia
            style={{paddingTop: "60%"}}
            className="user-avatar"
            image={this.props.friend.avatar} alt={this.props.friend.username}
            title={this.props.friend.username}
          />
          <CardContent className="user-content" style={{backgroundColor: "#37474F"}}>
            <Typography gutterBottom variant="h5" component="h2" style={{color:"white"}}>
              {this.props.friend.username}
            </Typography>
            <Typography style={{color:"white"}}>
              {<span>"{this.props.friend.bio}"</span>}
            </Typography>
          </CardContent>
          <CardActions style={{backgroundColor: "#37474F"}}>
            {console.log("friend check", this.props.friend.id)}
            <Link to={`/users/${this.props.friend.id}`}>
            <Button size="small" style={{color:"white"}}>
              View Profile
            </Button>
            </Link>
          </CardActions>
        </Card>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  viewedUser: state.viewedUser,
  friends: state.friends
})

export default connect(mapStateToProps)(FriendCard);
