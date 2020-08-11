import React from 'react';
import { connect } from 'react-redux';
import { makeRequest } from '../actions';
import RequestCard from './RequestCard'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class TicketCard extends React.Component {

  state = {
    showRequests: false
  }

  isAvailable = () => {
     this.props.viewedUser.tickets.find(ticket => {
      return ticket.available && (ticket.event_id === this.props.id)
    })
  }

  showAlert = () => {
    alert("Request sent!")
  }

  handleRequest = (e) => {
    e.preventDefault();
    console.log("Fetch:", this.props)
    let ticket = this.props.viewedUser.tickets.find(ticket => {
      return ticket.event_id === this.props.id
    })
      fetch("http://localhost:3000/api/v1/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify({
          user_id: this.props.viewedUser.id,
          ticket_id: ticket.id,
          requester: this.props.currentUser.id
        })
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
  				alert(response.errors)
  			} else {
    				this.props.makeRequest(response)
          }
      })
      this.showAlert()
    }

  toggleShowRequests = (event) => {
    this.setState({
      showRequests: !this.state.showRequests
    })
  }

render() {
  console.log("Ticket Card:", this.props)
  if (this.state.showRequests) {
    return <RequestCard toggleShowRequests={this.toggleShowRequests}/>
  }
  return (
    <Card style={{margin: "2vw", maxWidth: "250px"}}>
      <CardActionArea>
        <CardMedia
          style={{height: "120px"}}
          image={this.props.avatar}
          title="avatar_url"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.artist}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      {this.props.currentUser.id === this.props.viewedUser.id
        ? <CardActions>
            <Typography color="textPrimary">
              {this.props.currentUser.requests.length} requests for this ticket.
            </Typography>
            <Button size="small" color="primary" onClick={this.toggleShowRequests}>View Requests</Button>
          </CardActions>
        : <CardActions>
            {
              this.isAvailable
              ? <Button size="small" color="primary" onClick={(e) => this.handleRequest(e)}>
                  Request Ticket
                 </Button>
              : <Typography color="error">
                  Ticket Unavailable
                </Typography>
            }
          </CardActions>
      }
    </Card>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  viewedUser: state.viewedUser,
  tickets: state.tickets,
  requests: state.requests
})

export default connect(mapStateToProps, { makeRequest })(TicketCard);
