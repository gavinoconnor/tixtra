import React from 'react';
import { connect } from 'react-redux';
import { fetchEvent } from '../actions';
import UserCard from './UserCard';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

class EventProfile extends React.Component {

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
   }

  render() {
    console.log("Event Profile", this.props.selectedEvent)
    if (!this.props.selectedEvent) {
      return <div>Loading...</div>
    }

    return (
      <div>
          <Container style={{display: "grid", direction: "column", justifyContent: "center", marginBottom: "2vw"}}>
            <img src={this.props.selectedEvent.avatar} alt={this.props.selectedEvent.artist} style={{maxHeight: "60%", maxWidth: "100%"}}/>
            <Typography style={{display: "grid", direction: "column", justifyContent: "center", marginBottom: "2vw", fontSize:"30px", fontWeight:"bold", color: "#37474F"}}>
              {this.props.selectedEvent.artist}
            </Typography>
          </Container>

          <Container style={{display: "grid", direction: "row", justifyContent: "center"}}>
            <Typography style={{fontSize: "25px", color: "#37474F"}}>
              Users with Tickets:
            </Typography>
          </Container>

          <Grid container>
            <Grid item style={{display: "flex", flexWrap: "row", justify: "center"}}>
            {this.props.selectedEvent.tickets.length > 0
              ?
            this.props.selectedEvent.tickets.map(ticket => {
              console.log("TIX:", ticket)
              return <UserCard key={ticket.user.id} id={ticket.user.id} username={ticket.user.username} avatar={ticket.user.avatar} bio={ticket.user.bio}/>
            })
            : <h1>No tickets</h1> }
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
  events: state.events,
  selectedEvent: state.selectedEvent,
  tickets: state.tickets,
  viewedUser: state.viewedUser
})

export default connect(mapStateToProps, { fetchEvent })(EventProfile);
