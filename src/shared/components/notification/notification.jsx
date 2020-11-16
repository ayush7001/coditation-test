import React from 'react';
import classNames from 'classnames';
import Snackbar from '@material-ui/core/Snackbar';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent  from '@material-ui/core/SnackbarContent';

const styles = (theme) => ({
	success: {
		backgroundColor: green[600],
	},
	error: {
		backgroundColor: theme.palette.error.dark,
	},
	info: {
		backgroundColor: theme.palette.primary.dark,
	},
	warning: {
		backgroundColor: amber[700],
	}
});


/**
 * Notification - component to display notification
 */
const Notification = props => {
	const { classes, open, message, type } = props;
	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center'
			}}
			open={open}
			autoHideDuration={2000}
			onClose={props.resetNotification}
		>
			<SnackbarContent
				className={classNames(classes[type])}
				message={message}
			/>
		</Snackbar>
	);
};

export default withStyles(styles)(Notification);
