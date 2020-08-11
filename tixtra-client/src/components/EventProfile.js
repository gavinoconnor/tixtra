import React from 'react';
import { connect } from 'react-redux';
import { fetchEvent } from '../actions';
import { addTicket } from '../actions';

import UserCard from './UserCard';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class EventProfile extends React.Component {

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
   }

   showAlert = () => {
     alert("Ticket added!")
   }

   addTicket = (e) => {
     e.preventDefault();
       fetch("http://localhost:3000/api/v1/tickets", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Accepts": "application/json"
         },
         body: JSON.stringify({
           event_id: this.props.selectedEvent.id,
           user_id: this.props.currentUser.id
         })
       })
       .then(res => res.json())
       .then(response => {
   				this.props.addTicket(response)
        })
        this.showAlert();
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
            <Typography style={{fontSize: "18px", color: "#37474F", marginTop: "4vw", marginLeft: "2vw"}}>
              Have a ticket to this event?
              <Button size="medium" color="primary" onClick={this.addTicket}>Add Ticket</Button>
            </Typography>
          </Container>

          <Container style={{display: "grid", direction: "row", justifyContent: "center"}}>
            <Typography style={{fontSize: "25px", color: "#37474F"}}>
              Users with Tickets:
            </Typography>
          </Container>

          <Grid container >
            <Grid item style={{display: "flex", flexWrap: "row", justify: "center", textAlign: "center"}}>
            {this.props.selectedEvent.tickets.length > 0
              ?
            this.props.selectedEvent.tickets.map(ticket => {
              console.log("TIX:", ticket)
              return <UserCard key={ticket.user.id} id={ticket.user.id} username={ticket.user.username} avatar={ticket.user.avatar} bio={ticket.user.bio}/>
            })
            : <Typography style={{fontSize: "20px", marginTop: "4vw", marginLeft: "45vw"}}>No tickets :(</Typography>
               }
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
  currentUser: state.currentUser,
  tickets: state.tickets,
  viewedUser: state.viewedUser
})

export default connect(mapStateToProps, { fetchEvent, addTicket })(EventProfile);
