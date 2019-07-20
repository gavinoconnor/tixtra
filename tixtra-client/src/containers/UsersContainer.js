 import React from 'react';
 import { connect } from 'react-redux';
 import { fetchUsers } from '../actions';

 class UsersContainer extends React.Component {

   state = {
     users: [],
     open: false
   }

   componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data
        })
      })
    }

    toggleOpen = () => {
      this.setState({
        open: !this.state.open
      })
    }

    showDetails = () => {
      if (this.state.open){
        return (
        <div>
          <p>{this.props.username}</p>
          <p>Age: {this.props.age}</p>
          <p>Location: {this.props.location}</p>
          <p>Bio: {this.props.bio}</p>
          <p>Interest: {this.props.interest}</p>
        </div>
      )} else {
        return null
      }
    }

   render() {
     console.log(this.state.users)
     return(
       <div onClick={this.toggleOpen}>
         <ul>
         {this.state.users.map(user => {
           return <li>
             <img src={user.avatar}/><br />
             Name: {user.username} <br />
             {this.showDetails()}
               <br />
             </li>
         })}
       </ul>
       </div>
     )
   }


 }

export default connect()(UsersContainer)
