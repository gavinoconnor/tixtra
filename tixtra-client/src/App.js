import React from 'react';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NavBar from './containers/NavBar';
import UsersContainer from './containers/UsersContainer'
import { Route, Switch, Redirect } from 'react-router-dom';

// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          {/* <Route path="/users/:id" component={ProfilePage}/> */}
          {/* <Route path="/home" component={EventsPage}/> */}
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/users" component={UsersContainer}/>
          <Route render={() => <Redirect to="/login"/>}/>
        </Switch>
    </div>
  );
}

export default App;
