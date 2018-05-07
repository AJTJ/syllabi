import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../actions/builderAction';
import UserNameForm from './UserNameForm';
import firebase from 'firebase';
import { withFirebase } from "react-redux-firebase";

export class SharedSyllabi extends React.Component {

  render() {
    return (
      <div>
        <h1>Shared Syllabi</h1>
      </div>
    )
  }
}

SharedSyllabi.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    publicSyllabi: state.publicSyllabi,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SharedSyllabi);