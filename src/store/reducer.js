import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import notificationReducer from './notificationReducer';
import loadingReducer from './loadingReducer'


import userReducer from '../features/users/store/user.reducer'
/**app Reducer is used to combine all reducer of the app */
const appReducer  = combineReducers({
    error: errorReducer,
    notification: notificationReducer,
    loading: loadingReducer,
    user: userReducer
})

const rootReducer =  (state, action) => {
    if (action.type === 'LOGOUT') {
		state = undefined;
	}
    return appReducer(state, action)
};

export default rootReducer;