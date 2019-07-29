import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions';
import EventCard from '../components/EventCard'

// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListSubheader from '@material-ui/core/ListSubheader';


class EventsContainer extends React.Component {

  state = {
    searchTerm: "",
    filteredEvents: []
  }

  applyFilter = () => {
    const filtered = this.props.events.filter(event => {
      return event.artist.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    this.setState({
      filteredEvents: filtered
    })
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    }, () => this.applyFilter())
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searchTerm: ""
    })
  }


  componentDidMount() {
   this.props.fetchEvents()
  }

  render(){
    return (
      <div>
        <main>
          {/* Hero unit */}
          <div className="hero-content" style={{backgroundColor: "#FAFAFA",
          padding: "theme.spacing(8, 0, 6)"}}>
          <ListSubheader component="div">Events</ListSubheader>
            <Container maxWidth="sm" style={{paddingBottom: "2%", paddingTop: "1%"}}>
              <div>
                <form className='search-bar' onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search Events"
                    name="searchTerm"
                    style={{padding: "6px", marginTop: "8px", marginRight: "16px", fontSize: "17px", width: "100%"}}
                    onChange={this.handleChange}
                  />
                </form>
              </div>
            </Container>
          </div>
          <Container spacing={2} className="card-grid" style={{paddingTop: "theme.spacing(8)",
          paddingBottom: "theme.spacing(8)", maxWidth: "md", backgroundColor: "#ECEFF1"}}>
            {/* End hero unit */}
            <Grid container justify="space-around" spacing={2} style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
              {this.state.filteredEvents.length > 0
                ? this.state.filteredEvents.map(event => {
                return <EventCard key={event.id} {...event}/>
                })
                : this.props.events.map(event => {
                return <EventCard key={event.id} {...event}/>
                })
              }
            </Grid>
          </Container>
        </main>

        <footer className="footer" style={{ backgroundColor: "#FAFAFA",
          paddingTop: "2%" }}>
          <Typography variant="h6" align="center" gutterBottom>
            Tixtra
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            You made it to the end!
          </Typography>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
})


export default connect(mapStateToProps, { fetchEvents })(EventsContainer);



// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchEvents } from '../actions';
// import EventCard from '../components/EventCard'
//
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import ListSubheader from '@material-ui/core/ListSubheader';
//
//
// class EventsContainer extends React.Component {
//
//   componentDidMount() {
//     this.props.fetchEvents();
//    }
//
//   render() {
//     return(
//       <div className='events-container'>
//         <GridList style={{cellHeight: "200", display: "flex", flexWrap: "wrap", justifyContent: "space-around", overflow: "hidden"}}>
//           <GridListTile key="Subheader" style={{ width: "100%", height: "60px" }}>
//             <ListSubheader component="div">Events</ListSubheader>
//           </GridListTile>
//             {this.props.events.map(event => {
//               return <EventCard key={event.id} {...event}/>
//              })}
//         </GridList>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = state => ({
//  events: state.events
// })
//
// export default connect(mapStateToProps, { fetchEvents })(EventsContainer)
