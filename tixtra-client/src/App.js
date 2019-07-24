import React from 'react';
import LoginForm from './containers/LoginForm';
import SignupForm from './containers/SignupForm';
import NavBar from './containers/NavBar';
import UsersContainer from './containers/UsersContainer'
import UserProfile from './components/UserProfile'
import VenuesContainer from './containers/VenuesContainer'
import EventsContainer from './containers/EventsContainer'
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './actions';

// import './App.css';

const componentDidMount = () => {
		const token = localStorage.getItem("token")
		if(token){
			fetch("http://localhost:3000/api/v1/session_user", {
				headers: {
					"Authorization": token
				}
			})
			.then(res => res.json())
			.then(response => {
				if (response.errors){
					localStorage.removeItem("user_id")
					alert(response.errors)
				} else {
					this.props.login(response)
				}
			})
		}
	}


function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignupForm}/>
          <Route path="/users/:id" component={UserProfile}/>
          <Route path="/users" component={UsersContainer}/>
          <Route path="/venues" component={VenuesContainer}/>
          <Route path="/events" component={EventsContainer}/>
          <Route render={() => <Redirect to="/login"/>}/>
        </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("App", state)
  return {

  }
}

export default connect(null, { login })(App);
