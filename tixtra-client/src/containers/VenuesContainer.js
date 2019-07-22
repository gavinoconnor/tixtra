import React from 'react';
import { connect } from 'react-redux';
import { fetchVenues } from '../actions';
import VenueCard from '../components/VenueCard'


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';


class VenuesContainer extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchVenues();
   }

  render() {
    return(
      <div className='venues-container'>
        <GridList style={{cellHeight: "200", display: "flex", flexWrap: "wrap", justifyContent: "space-around", overflow: "hidden"}}>
          <GridListTile key="Subheader" style={{ width: "100%", height: "60px" }}>
            <ListSubheader component="div">Venues</ListSubheader>
          </GridListTile>
            {this.props.venues.map(venue => {
              return <VenueCard key={venue.id} {...venue}/>
             })}
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = state => ({
 venues: state.venues
})

export default connect(mapStateToProps, { fetchVenues })(VenuesContainer)
