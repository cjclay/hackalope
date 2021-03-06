// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import Nav from './nav.jsx';
import Search from './search.jsx';
import Submit from './submit.jsx';
import SignUp from './signup.jsx';
import Login from './login.jsx';

const Main = props => (
  <div>
    <Nav />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', verticalAlign: '-200px' }}>
      <div><Search /></div>
    </div>
    <Submit />
    <SignUp />
    <Login />
    {props.children}
  </div>
);

export default connect()(Main);
