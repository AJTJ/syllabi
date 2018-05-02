import React from "react";
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/mySyllabi">My Syllabi</NavLink>
          <NavLink to="/publicSyllabi">Public Syllabi</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
