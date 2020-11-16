import { API_CONFIG } from '../../../shared/constants/api';
import httpService from '../../../shared/services/http.service';
import { createAction } from '../../../shared/utility';
import * as actionTypes from '../../../store/action-types';

/** getUsers method is used to call api for getting github users*/
const getUsers = ({searchValue}) => {
    return (dispatch) => {
        dispatch(createAction(actionTypes.GET_USERS_INIT))
        let url  = `${API_CONFIG.path.users}`;
        if(searchValue !== '') {
            url =  `${API_CONFIG.path.users}/${searchValue}`
        }
        httpService.get(url).then((res) => {
            dispatch(createAction(actionTypes.GET_USERS_SUCCESS, {users: searchValue !== '' ? [res] : res}))
        }).catch((error) => {
            dispatch(createAction(actionTypes.GET_USERS_FAIL, {error: error.message || ''}))
        })
    }
}

const getUser = (value) => {
    return (dispatch) => {
        dispatch(createAction(actionTypes.GET_USER_PROFILE_INIT));
        httpService.get(`${API_CONFIG.path.users}/${value}`).then((res) => {
            dispatch(createAction(actionTypes.GET_USER_PROFILE_SUCCESS, res))
        }).catch(err => {
            dispatch(createAction(actionTypes.GET_USER_PROFILE_FAIL, {error: err.message || ''}))
        })
    }
}

export {
    getUsers,
    getUser
}