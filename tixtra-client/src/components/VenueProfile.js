import React from 'react';
import { connect } from 'react-redux';
import { fetchVenue } from '../actions';
import EventCard from './EventCard';

class VenueProfile extends React.Component {

  componentDidMount() {
    this.props.fetchVenue(this.props.match.params.id);
   }

  render() {
    if (!this.props.selectedVenue) {
      return <h1>loading</h1>
    }
    console.log("event profile", this.props.selectedVenue)

    return (
      <div>
        <h1>Venue Profile</h1>
        <p>Name: {this.props.selectedVenue.name} </p>
        <img src={this.props.selectedVenue.avatar} alt={this.props.selectedVenue.name}/>
        {this.props.selectedVenue.events.length > 0
          ?
        this.props.selectedVenue.events.map(event => {
          return <EventCard key={event.id} {...event}/>
        })
        : <h1>No upcoming events</h1> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  venues: state.venues,
  selectedVenue: state.selectedVenue
})

export default connect(mapStateToProps, { fetchVenue })(VenueProfile);
