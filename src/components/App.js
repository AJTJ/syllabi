import React from "react";
import { Switch, NavLink, Route, withRouter } from 'react-router-dom';
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

import Login from './Login';
import SharedSyllabi from './SharedSyllabi';
import MySyllabi from './MySyllabi';
import SyllabiBuilder from './SyllabiBuilder';

export const App = ({ firebase, auth }) => {

  return !isEmpty(auth) ? //LOGGED IN CIRUMSTANCES
    <React.Fragment>
      <div className="appNav_wrapper">
        <NavLink to="/MySyllabi">My Syllabi</NavLink>
        <NavLink to="/SharedSyllabi">Shared Syllabi</NavLink>
        <Login />
      </div>
      <div className="page__wrapper">
        <div className="builderSyllabi__wrapper">
          <React.Fragment>
            <SyllabiBuilder />
          </React.Fragment>
          <div className="savedSyllabi__wrapper">
            <Switch>
              <Route path="/MySyllabi" component={MySyllabi} />
              <Route path="/SharedSyllabi" component={SharedSyllabi} />
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment> : //LOGGED OUT CIRCUMSTANCES
    <React.Fragment>
      <div>
        <NavLink exact to="/">
          Login
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </React.Fragment>;
}

export default compose(
  firebaseConnect(),
  withRouter,
  connect(({ firebase: { auth } }) => ({ auth })),
)(App);
