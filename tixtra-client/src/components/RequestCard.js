import React from 'react';
import { connect } from 'react-redux';
import RequestingUser from './RequestingUser'

import Button from '@material-ui/core/Button';


class RequestCard extends React.Component {

  state = {
    cards: []
  }

  componentDidMount(){
    return this.props.viewedUser.requests.forEach(request => {
      console.log("request fetch:", request.requester)
        if (request.requester) {
          return fetch(`http://localhost:3000/api/v1/users/${request.requester}`)
          .then(res => res.json())
          .then(data => {
            console.log("getRequest", data)
            return this.setState({
              cards: [...this.state.cards, data]
            })
          })
        }
    })
  }
  render() {
    console.log("Request:", this.state.cards)
    return(
      <div>
        {this.state.cards.length > 0
          ? this.state.cards.map(card => {
          return <RequestingUser {...card} key={card.id}/>
        })
        : null
      }


        <Button color="primary" size="small" onClick={this.props.toggleShowRequests}>Back</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
  viewedUser: state.viewedUser
})


export default connect(mapStateToProps)(RequestCard);
