import React from 'react';
import { connect } from 'react-redux';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class RequestingUser extends React.Component {

  state = {
    open: false,
    conversation: "",
    convos: []
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = (e) => {
    this.setState({
      conversation: e.target.value
    })
  }

  renderConvo = () => {
    return this.state.convos.map(convo => {
      return <div>{convo}</div>
    })
  }

  handleAccept = () => {
    alert("Party! Message your new friend and let them know!")
  }

  handleDeny = () => {
    alert("Got it. We'll let them down easy.")
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      convos: [...this.state.convos, this.state.conversation]
    })
    fetch("http://localhost:3000/api/v1/conversations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        sender_id: this.props.currentUser.id,
        recipient_id: this.props.id,
        content: this.state.conversation
      })
  })
  .then(res => res.json())
  .then(console.log)
  .then(() => {
    this.setState({
      conversation: ""
    })
  })
}

  render() {
    return (
      <div>
        <Card style={{margin: "2vw", maxWidth: "220px"}}>
          <CardActionArea>
            <CardMedia
              style={{height: "120px"}}
              image={this.props.avatar}
              title="avatar_url"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.username}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.location}
              </Typography>
            </CardContent>
          </CardActionArea>

           <CardActions>
              <Button size="small" color="primary" onClick={this.toggleOpen}> Message User </Button>
              <Button size="small" color="primary" onClick={this.handleAccept}> Accept Request </Button>
              <Button size="small" style={{color:"red"}} onClick={this.handleDeny}> Deny Request </Button>
           </CardActions>
           {this.state.open
             ? <CardActions>
               <div>
               <form onSubmit={this.handleSubmit}>
                 <input
                   placeholder="Type your message here."
                   onChange={this.handleChange}>
                 </input>
               </form>
               </div>
               <div>
                 {this.renderConvo()}
               </div>
              </CardActions>
             : null
           }

        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  viewedUser: state.viewedUser
})

export default connect(mapStateToProps)(RequestingUser);
