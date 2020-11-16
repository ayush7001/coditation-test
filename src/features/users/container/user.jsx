import React from 'react';
import  {connect} from'react-redux';
import Breadcrumb from '../../../shared/components/breadCrumb/breadCrumb';
import GridComponent from '../../../shared/components/grid/grid';
import { API_CONFIG } from '../../../shared/constants/api';
import httpService from '../../../shared/services/http.service';
import { createLoadingSelector } from '../../../shared/utility';
import UserProfile from '../component/user';

import * as usersAction from '../store/user.action'

class UserContainer extends React.Component {

    state = {
        userName: '',
        repositories: []
    }

    componentDidMount () {
        this.setState({
            userName: this.props.match.params.username
        })
        this.props.getUserProfile(this.props.match.params.username);
        this.getRepositories(this.props.match.params.username);

    }

    /**
     * getRepositories method is used to get list of all Repositories for sepecifc users
     * @param {*} value 
     */
    getRepositories = (value) => {
        httpService.get(`${API_CONFIG.path.users}/${this.props.match.params.username}/repos`).then((res) => {
            this.setState({repositories: res})
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return <>
            <Breadcrumb username={this.props.match.params.username}></Breadcrumb>
            <GridComponent container  >
                <UserProfile userDetail={this.props.users.user} loading={this.props.loading} repos={this.state.repositories}/>
            </GridComponent>
        </>
    }
}

const loadingSelector = createLoadingSelector(['GET_USER_PROFILE'])

const mapStateToProps = (state) => {
    return {
        users: state.user,
        loading: loadingSelector(state)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (value) => dispatch(usersAction.getUser(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)