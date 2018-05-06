import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

const displayLogin = auth => {
  if (!isLoaded(auth)) {
    return <span>Still Loading...</span>;
  } else if (isEmpty(auth)) {
    return <span>Not Authed</span>;
  }
  return <pre>Welcome, {auth.displayName}!</pre>;
};

export const Login = ({ firebase, auth }) => (

  <div>
    <button
      onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
    >Login With Google</button>
    <button
      onClick={() => firebase.logout() }
    >Logout</button>
    <div>
      {displayLogin(auth)}
    </div>
  </div>
)

Login.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object
}

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth }}) => ({ auth }))
)(Login)