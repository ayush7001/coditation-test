import React from 'react';
import { connect } from 'react-redux';
import UsersListComponent from '../component/users'
import GridComponent from '../../../shared/components/grid/grid';
import {createLoadingSelector} from '../../../shared/utility'
import Breadcrumb from '../../../shared/components/breadCrumb/breadCrumb';
import *as usersActions from '../store/user.action'

class Users extends React.Component {

    state = {
        searchValue: ""
    }
    componentDidMount (){
        this.props.getUsers({searchValue: this.state.searchValue});
    }

    /** handleSearchValue method is used to search update state */
    handleSearch = (event) => {
        this.setState({searchValue:  event.target.value});
    }

    /**
     * handleSearchButton is used to search the user on click
     */
    handleSearchButton = () => {
        this.props.getUsers({searchValue: this.state.searchValue});
    }
    /**
     * handleClearButton method is used to clear the search field and call all users list
     */
    handleClearButton = () => {
        this.setState({searchValue: ''}, () => {
            this.props.getUsers({searchValue: this.state.searchValue});
        })
    }
    render() {
        return <>
            <Breadcrumb title={"Users"}></Breadcrumb>
            <GridComponent container  direction="row"
                justify="flex-end"
                alignItems="flex-end">
                <GridComponent item xs={3}>
                    <input type="text" value={this.state.searchValue} placeholder="search" onChange={this.handleSearch} />
                     <button type="button" onClick={this.handleSearchButton} disabled={this.state.searchValue === ""}>Search</button>
                     <button type="button" onClick={this.handleClearButton} disabled={this.state.searchValue === ""}>Clear</button>
                </GridComponent>
            </GridComponent>
            <GridComponent container  direction="row"
                justify="center"
                alignItems="center">
                <GridComponent item xs={8}>
                    <UsersListComponent loading={this.props.loading} users={this.props.user.users}></UsersListComponent>
                </GridComponent>
            </GridComponent>
        </>
    }
}

const loadingSelectors = createLoadingSelector(['GET_USERS']);
const mapStateToProps = (state) => {
    return {
        user: state.user,
        loading: loadingSelectors(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: ({searchValue}) => dispatch(usersActions.getUsers({searchValue}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);