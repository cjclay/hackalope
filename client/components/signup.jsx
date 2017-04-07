// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { selectUser, userFormData } from '../actions/index.js';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Required Dependencies
import axios from 'axios';

const SignUp = ({user, dispatch }) => {
  // add user to the database
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/signup', user)
      .then( response => {
        var newUser = response.data
        // change the store to add the name, username, admin, _id, favorites
        dispatch(selectUser(newUser));
      })
      .catch ( err => {
        console.error(err)
      })
  };

  return (

  <div style={{alignContent: 'center'}}>
    <MuiThemeProvider>

      <form onSubmit={handleSubmit}>
        <TextField name="name"
          value={user.name}
          floatingLabelText="Name"
          onChange={e => dispatch(userFormData({name: e.target.value}))}
        /><br/>
        <TextField name="username"
          value={user.username}
          floatingLabelText="Username"
          onChange={e => dispatch(userFormData({username: e.target.value}))}
        /><br/>
        <TextField name="password"
          value={user.password}
          floatingLabelText="Password"
          onChange={e => dispatch(userFormData({password: e.target.value}))}
        /><br/>

      <RaisedButton
        type="submit"
        label="Submit"
        secondary={true}
      />
    </form>
   </MuiThemeProvider>
  </div>
)};


const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(SignUp);
