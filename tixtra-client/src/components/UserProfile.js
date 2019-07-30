import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import TicketCard from './TicketCard';
import ProfileForm from './ProfileForm';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
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
      <div className="user-profile-page">
        <div>
          <Grid container style={{display:"grid", direction:"row", backgroundColor: "#80CBC4", paddingTop: "2%", paddingBottom: "2%", justifyContent: "space-evenly", width: "100%"}}>

            <Grid item style={{display:"flex", direction:"row", justify: "space-between", alignItems:"center"}}>
             <Avatar alt={this.props.viewedUser.username} src={this.props.viewedUser.avatar} style={{margin: "10px", width: "100px", height: "100px"}}/>
             <Typography >
               Name: {this.props.viewedUser.username} <br />
               Location: {this.props.viewedUser.location} <br />
               Age: {this.props.viewedUser.age} <br />
               Here for: {this.props.viewedUser.interest}
             </Typography>

             </Grid>
               <Grid item style={{justifyContent: "center"}}>
               {this.props.viewedUser.id === this.props.currentUser.id
                 ? <Button size="small" onClick={this.toggleEdit}>Edit Profile</Button>
                 : null }
               {this.state.isEditing
                ? <Container item>
                    <ProfileForm />
                  </Container>
                : null}
               </Grid>
          </Grid>
        </div>

        <Grid container style={{display: "grid", gridTemplateColumns: "2fr 2fr", justifyContent:"flex-start"}}>
          {this.props.viewedUser.events.length > 0
            ?
          <Grid item>
            <Typography>
              Tickets
            </Typography>
          {this.props.viewedUser.events.map(event => {
            console.log(event)
            return <TicketCard key={event.id} {...event}/>
          })}
          </Grid>
          : <Typography>No current tickets</Typography>}
          <Grid item style={{justifyContent: "center"}}>
            <Typography>
              Friends
            </Typography>
            {/* {this.props.viewedUser.friends.map(friend => {
              return <FriendCard key={friend.id {...friend}}/>
            })} */}
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
