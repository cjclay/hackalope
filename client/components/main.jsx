// Required React Components
import React from 'react';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Required Modules
import Nav from './nav.jsx';


class Main extends React.Component{

	constructor(props){
		super(props);
	}
	componentWillMount() {
		(testreducer) => {
			this.props.dispatch({
        	type: 'TEST',
        	testreducer: testreducer
      })
	  }
  }

	render(){
		return (
      <MuiThemeProvider>
        <Nav />
      </MuiThemeProvider>
		);
	}
}

const mapStateToProps = (state) => {
  return {
  	testreducer : state.testreducer,
    dispatch : state.dispach
  };
};

export default connect (mapStateToProps)(Main);
