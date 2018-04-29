import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeScreen from '../../screens/home-screen/HomeScreen';
import { connect } from 'react-redux';

import './app.scss';

class App extends Component {
	static propTypes = {}

	render () {
		return (
			<Router>
				<div className='app-holder'>
					<div className='app'>

							<Route path='/' component={HomeScreen} />

					</div>
				</div>
			</Router>
		);
	}
}

let mapStateToProps = ( state ) => {
	return {
	};
};

let mapDispatchToProps = dispatch => {
	return {
	};
};

// export default connect( mapStateToProps, mapDispatchToProps )( App );
export default App ;
