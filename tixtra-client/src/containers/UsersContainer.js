 import React from 'react';
 import { connect } from 'react-redux';
 import { fetchUsers } from '../actions';
 import UserCard from '../components/UserCard'

 import GridList from '@material-ui/core/GridList';
 import GridListTile from '@material-ui/core/GridListTile';
 import ListSubheader from '@material-ui/core/ListSubheader';


 class UsersContainer extends React.Component {

   componentDidMount() {
     console.log(this.props)
     this.props.fetchUsers();
    }

   render() {
     return(
       <div className='users-container'>
         <GridList style={{cellHeight: "200", display: "flex", flexWrap: "wrap", justifyContent: "space-around", overflow: "hidden"}}>
           <GridListTile key="Subheader" style={{ width: "100%", height: "60px" }}>
             <ListSubheader component="div">Users</ListSubheader>
           </GridListTile>
             {this.props.users.map(user => {
               return <UserCard key={user.id} {...user}/>
              })}
         </GridList>
       </div>
     )
   }
 }

const mapStateToProps = state => ({
  users: state.users
})


export default connect(mapStateToProps, { fetchUsers })(UsersContainer)
