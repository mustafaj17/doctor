import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

export class HomeScreen extends Component {
	static propTypes = {
	}

	render () {
		return (
			<div className='home-screen'>
				Hey World
			</div>
		);
	}
}

// const mapStateToProps = state => {
// 	return {userID: state.user.id};
// };
//
// const mapDispatchToProps = dispatch => {
// 	return {setUserID: userID => dispatch( setUserID( userID ) )};
// };

// export default connect( mapStateToProps, mapDispatchToProps )( HomeScreen );
export default HomeScreen;
