import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const UserNameForm = ({onSubmit}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="userName">Enter your name</label>
        <input type="text" id="userName"/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default UserNameForm;