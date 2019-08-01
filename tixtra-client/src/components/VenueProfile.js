import React from 'react';
import { connect } from 'react-redux';
import { fetchVenue } from '../actions';
import EventCard from './EventCard';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

class VenueProfile extends React.Component {

  componentDidMount() {
    this.props.fetchVenue(this.props.match.params.id);
   }

  render() {
    if (!this.props.selectedVenue) {
      return <h1>loading</h1>
    }

    return (
      <div>
        <Container style={{display: "grid", direction: "column", justifyContent: "center", marginBottom: "2vw"}}>
          <img src={this.props.selectedVenue.avatar} alt={this.props.selectedVenue.name} style={{maxHeight: "50%", maxWidth: "100%"}}/><br />
          <Typography style={{display: "grid", direction: "column", justifyContent: "center", marginBottom: "2vw"}}>
            <strong>{this.props.selectedVenue.name}</strong> <br />
            {this.props.selectedVenue.address} <br />
            {this.props.selectedVenue.city},&nbsp;
            {this.props.selectedVenue.state} <br />
            <Link to={this.props.selectedVenue.url}>Venue Website</Link>
          </Typography>
        </Container>
        <Container style={{display: "grid", direction: "column", justifyContent: "center", marginBottom: "2vw"}}>
          <Typography style={{display: "grid", direction: "column", justifyContent: "center", marginBottom: "2vw", fontSize:"30px", fontWeight:"bold"}}>
            Upcoming Shows
          </Typography>
        </Container>

        <Grid container>
          <Grid item style={{display: "flex", direction: "row"}}>
          {this.props.selectedVenue.events.length > 0
            ?
          this.props.selectedVenue.events.map(event => {
            return <EventCard key={event.id} {...event}/>
          })
          : <h1>No upcoming events</h1> }
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  venues: state.venues,
  events: state.events,
  selectedVenue: state.selectedVenue
})

export default connect(mapStateToProps, { fetchVenue })(VenueProfile);
