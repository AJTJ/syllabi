import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

export const Login = ({ firebase, auth }) => (
  <div>
    <button
      onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
    >Login With Google</button>
    <div>
      <h2>Auth</h2>
      {
        !isLoaded(auth)
        ? <span>Loading...</span>
        : isEmpty(auth)
          ? <span> Not Authed </span>
          : <pre>{JSON.stringify(auth, null, 2)}</pre>
      }
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