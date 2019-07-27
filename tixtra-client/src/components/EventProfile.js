import React from 'react';
import { connect } from 'react-redux';
import { fetchEvent } from '../actions';
import TicketCard from './TicketCard';

class EventProfile extends React.Component {

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
   }

  render() {
    if (!this.props.selectedEvent) {
      return <h1>loading</h1>
    }
    console.log("event profile", this.props.selectedEvent.tickets)

    return (
      <div>
        <h1>Event Profile</h1>
        <p>Name: {this.props.selectedEvent.artist} </p>
        <img src={this.props.selectedEvent.avatar} alt={this.props.selectedEvent.artist}/>
        {this.props.selectedEvent.tickets.length > 0
          ?
        this.props.selectedEvent.tickets.map(ticket => {
          return <TicketCard key={ticket.id} {...ticket}/>
        })
        : <h1>No tickets</h1> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events,
  selectedEvent: state.selectedEvent
})

export default connect(mapStateToProps, { fetchEvent })(EventProfile);
