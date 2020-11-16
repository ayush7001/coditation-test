/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import NotificationComponent from './shared/components/notification/notification';
import { createAction } from './shared/utility';



class Notification extends Component {
	render() {
		if (!this.props.message) {
			return null;
		}
		return (
			<NotificationComponent
				open={this.props.message ? true : false}
				type={this.props.type}
				message={this.props.message}
				resetNotification={this.props.resetNotification}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		message: state.notification.message,
		type: state.notification.type
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetNotification: () => { dispatch(createAction('RESET_MESSAGE')); }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
