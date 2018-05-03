import React from "react";
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <NavLink exact to="/">Login</NavLink>
          <NavLink to="/HomePage">Homepage</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/HomePage" component={HomePage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
