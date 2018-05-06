import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SyllabiBuilder extends Component  {
  render() {
    return (
      <div className="builder__wrapper">
        <h2>Save a thing</h2>
        <input type="text"/>
      </div>
    )
  }
};