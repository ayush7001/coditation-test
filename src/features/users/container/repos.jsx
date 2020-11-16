import React from 'react';
import Breadcrumb from '../../../shared/components/breadCrumb/breadCrumb';
import GridComponent from '../../../shared/components/grid/grid';
import { API_CONFIG } from '../../../shared/constants/api';
import httpService from '../../../shared/services/http.service';
import Repository from '../component/repos';

class Repositories extends React.Component {
    state = {
        repoDetail : null,
        loading: true
    }

    componentDidMount() {
        httpService.get(`${API_CONFIG.path.repos}/${this.props.match.params.username}/${this.props.match.params.repo}`).then((res) => {
            this.setState({repoDetail: res, loading: false});
        }).catch((err) => {
            this.setState({repoDetail: null, loading: false});
        })
    }
    
    render() {
        return <>
            <Breadcrumb username={this.props.match.params.username} repo={this.props.match.params.repo}></Breadcrumb>
            <GridComponent container>
                <Repository loading={this.state.loading}  repoDetail={this.state.repoDetail}/>
            </GridComponent> 
        </>
    }
}

export default Repositories;