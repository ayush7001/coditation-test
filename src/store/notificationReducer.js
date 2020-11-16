import * as actionTypes from './action-types';

/**
 * notificationEnabledActions contains all actions, on which notification must be shown
 * with key-value paired object
 * key - action type
 * value - type of notification (success/error/warning etc)
 */
const notificationEnabledActions = {
	[actionTypes.GET_USERS_FAIL]: 'error',
	[actionTypes.GET_USERS_SUCCESS]: 'sucess',
	[actionTypes.GET_USER_PROFILE_FAIL]: 'error',
	[actionTypes.GET_USER_PROFILE_SUCCESS]: 'sucess',
};

/**
 * handle notification status (message and type) based on dispatched event
 * @param state
 * @param action
 */
const notificationReducer = (state = { message: '', type: ''}, action) => {
	switch (action.type) {
		// if event if RESET_MESSAGE, set message and type to be blank
		case actionTypes.RESET_MESSAGE:
			return {
				message: '',
				type: ''
			};
		default:
			// check if event if present in notification-enabled actions list, and update state accordingly
			if (notificationEnabledActions[action.type]) {
				return {
					message: action.payload.message,
					type: notificationEnabledActions[action.type]
				};
			}
	}
	return state;
};

export default notificationReducer;
