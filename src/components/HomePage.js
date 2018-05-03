import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../actions/testAction';
import UserNameForm from './UserNameForm';
// import firebase from 'firebase';
import { withFirebase } from "react-redux-firebase";

export class HomePage extends React.Component {


  setUserName = e => {
    e.preventDefault();
    this.props.actions.setUserName(this.props.user , e.target[0].value);
    firebase.push(e.target[0].value);
  }

  render() {
    return (
      <div>
        <h1>Syllabi</h1>
        <h3>A Syllabus sharing application</h3>
        <h1>{this.props.user.userName}</h1>
        <UserNameForm
          onSubmit = {this.setUserName}
        />
      </div>
    )
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log('MAPSTATE STATE', state);
  return {
    user: state.user,
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
)(HomePage);