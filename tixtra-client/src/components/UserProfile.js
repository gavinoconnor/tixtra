import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import TicketCard from './TicketCard';
import ProfileForm from './ProfileForm';

import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


class UserProfile extends React.Component {

  state = {
    isEditing: false
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
   }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  render() {
    console.log("user profile:", this.props)
    if (!this.props.viewedUser || !this.props.currentUser) {
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
                  image={this.props.viewedUser.avatar} alt={this.props.viewedUser.username}
                  title="user-avatar"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
                    {this.props.viewedUser.username}
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    "{this.props.viewedUser.bio}"
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

          { (this.state.isEditing && this.props.viewedUser.id === this.props.currentUser.id)
            ? <ProfileForm />
            : <Grid item>
                <Card className='user-bio'
                  style={{height: 375, width: 345}}>
                  <CardContent>
                    <br />
                    <Typography color="textSecondary" variant="h5" justify="center">
                      Age: <strong>{this.props.viewedUser.age}</strong>
                    </Typography>
                    <br />
                    <Typography color="textSecondary" variant="h5" component="h2">
                      Location: <strong>{this.props.viewedUser.location}</strong>
                    </Typography>
                    <br />
                    <Typography color="textSecondary" variant="h5" component="h2">
                      Gender: <strong>{this.props.viewedUser.gender}</strong>
                    </Typography>
                    <br />
                    <Typography color="textSecondary" variant="h5" component="h2">
                      Interest: <strong>{this.props.viewedUser.interest}</strong>
                    </Typography>
                  </CardContent>
                    <CardActions>
                      <Button size="medium" onClick={this.toggleEdit}>Edit Profile</Button>
                    </CardActions>
                </Card>
              </Grid>}

      <Grid container
        spacing={2}
        direction="row"
        display="flex"
        justify="flex-start"
        alignItems="flex-start">
        {this.props.viewedUser.events.length > 0
          ?
        <Grid item md={3}  >
        {this.props.viewedUser.events.map(event => {
          return <TicketCard key={event.id} {...event}/>
        })}
        </Grid>
        : <h1>No tickets</h1>}
      </Grid>
    </Grid>
    </div>
    );
  }
}

const mapStateToProps = state => (
  {...state,
   currentUser: state.currentUser}
 )


export default connect(mapStateToProps, { fetchUser })(UserProfile);
