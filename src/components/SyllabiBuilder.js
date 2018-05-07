import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../actions/builderAction';
import firebase from 'firebase';
import { withFirebase } from "react-redux-firebase";

class SyllabiBuilder extends Component  {
  

  saveData = e => {
    const { actions, currentSyllabi } = this.props;
    const title = e.target[0].value;
    e.preventDefault();

    actions.setSyllabiTitle(currentSyllabi, title);
  }

  render() {
    const { syllabiTitle } = this.props.currentSyllabi;
    return (
      <div className="builder__wrapper">
        <h2>Builder</h2>
        <ul>
          {syllabiTitle}
        </ul>
        <form onSubmit={this.saveData}>
          <input type="text"/>
          <input type="submit" value="Save this info"/>
        </form>
        
      </div>
    )
  }
};

function mapStateToProps(state) {
  console.log('SyllabiBuilder mapState', state);
  return {
    currentSyllabi: state.syllabi.currentSyllabi
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SyllabiBuilder);