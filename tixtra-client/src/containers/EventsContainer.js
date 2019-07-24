import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions';
import EventCard from '../components/EventCard'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';


class EventsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchEvents();
   }

  render() {
    return(
      <div className='events-container'>
        <GridList style={{cellHeight: "200", display: "flex", flexWrap: "wrap", justifyContent: "space-around", overflow: "hidden"}}>
          <GridListTile key="Subheader" style={{ width: "100%", height: "60px" }}>
            <ListSubheader component="div">Events</ListSubheader>
          </GridListTile>
            {this.props.events.map(event => {
              return <EventCard key={event.id} {...event}/>
             })}
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = state => ({
 events: state.events
})

export default connect(mapStateToProps, { fetchEvents })(EventsContainer)
