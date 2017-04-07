// Required React Components
import React from 'react';
import { connect } from 'react-redux';
// Required Modules
import Nav from './nav.jsx';
import Search from './search.jsx';
import Submit from './submit.jsx';

const Main = (props) => {

	return (
    <div>
      <Nav />
      <Search />
      <Submit />
      {props.children}
    </div>
	);
};

export default connect()(Main);
