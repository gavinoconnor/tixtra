import React from 'react';
import { connect } from 'react-redux';
import RequestingUser from './RequestingUser'

import Button from '@material-ui/core/Button';


class RequestCard extends React.Component {

  state = {
    cards:[]
  }

  componentDidMount(){
    return this.props.viewedUser.requests.forEach(request => {
        if (request.requester) {
          return fetch(`http://localhost:3000/api/v1/users/${request.requester}`)
          .then(res => res.json())
          .then(data => {
            console.log("getRequest", data)
            this.setState({
              cards: [...this.state.cards, data]
            })
          })
        }
    })
  }

  render() {
    console.log("Request:", this.props.viewedUser.requests)

    return(
      <div>
        {this.state.cards.map(card => {
          return <RequestingUser {...card} key={card.id}/>
        })}

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
