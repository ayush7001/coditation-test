import * as actionTypes from '../../../store/action-types';

const initalState = { 
    projects: [],
    users: [],
    user: null
}

const userReducer  = (state= initalState, action) => {
    switch(action.type) {
        case actionTypes.GET_USERS_SUCCESS:
            return {
                users: action.payload.users
            }
        case actionTypes.GET_USER_PROFILE_SUCCESS:
            return {
                user: action.payload
            }    
        default: 
        return state    
    }
}

export default userReducer;