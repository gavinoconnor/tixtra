import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import TicketCard from './TicketCard'

import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


class UserProfile extends React.Component {

  componentDidMount() {
    console.log('mounted')
    this.props.fetchUser(this.props.currentUser.id);
   }

  render() {
    console.log(this.props.currentUser)
    if (!this.props.currentUser) {
      return <h1>loading</h1>
    }

    return (
      <div style={{padding: 3}}>
        <Grid container
          item md={2}
          spacing={2}
          direction="row"
          alignItems="center"
          justify="space-around"
          >
          <Grid item >
            <Card style={{
              maxWidth: 345
            }}>
              <CardActionArea>
                <CardMedia
                  style={{
                    height: 240
                  }}
                  image={this.props.currentUser.avatar} alt={this.props.username}
                  title="user-avatar"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
                    {this.props.currentUser.username}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    "{this.props.currentUser.bio}"
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Favorite
                </Button>
                <Button size="small" color="primary">
                  Message
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item>
            <Card className='user-bio'
              style={{height: 375, width: 345}}>
              <CardContent>
                <br />
                <Typography color="textSecondary" variant="h5" justify="center">
                  Age: <strong>{this.props.currentUser.age}</strong>
                </Typography>
                <br />
                <Typography color="textSecondary" variant="h5" component="h2">
                  Location: <strong>{this.props.currentUser.location}</strong>
                </Typography>
                <br />
                <Typography color="textSecondary" variant="h5" component="h2">
                  Gender: <strong>{this.props.currentUser.gender}</strong>
                </Typography>
                <br />
                <Typography color="textSecondary" variant="h5" component="h2">
                  Interest: <strong>{this.props.currentUser.interest}</strong>
                </Typography>
              </CardContent>
                <CardActions>
                  <Button size="medium">Edit Profile</Button>
                </CardActions>
              </Card>
            </Grid>
        </Grid>

      <Grid container
        spacing={2}
        direction="row"
        display="flex"
        justify="flex-start"
        alignItems="flex-start">
        <Grid item md={3}  >
        {this.props.currentUser.events.map(event => {
          return <TicketCard key={event.id} {...event}/>
        })}
        </Grid>
      </Grid>
    </div>
    );
  }
}

const mapStateToProps = state => ({
 currentUser: state.currentUser
})


export default connect(mapStateToProps, { fetchUser })(UserProfile);
