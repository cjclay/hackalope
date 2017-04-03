// Required React Components
import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Required Modules
import Main from './main.jsx';
import Nav from './nav.jsx';
import routes from '../routes.jsx';

class App extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <Main />
        <h1>Hail Satan!</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    testreducer : state.testreducer,
    dispatch : state.dispach
  };
};

export default connect (mapStateToProps)(App);
