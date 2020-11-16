import React from 'react';
import GridComponent from '../../../shared/components/grid/grid';
import SimpleCard from '../../../shared/components/cards/simple-card'

import './user.css'
import Loader from '../../../shared/components/loaders/loader';

const Repository = props => {
    return <>
            {
                props.loading && <GridComponent container className="loader-div"
                direction="row"
                justify="center"
                alignItems="center"><Loader /></GridComponent>
            }
            {
                !props.loading && !props.repoDetail && <GridComponent container className="loader"
                direction="row"
                justify="center"
                alignItems="center">Sorry No Data Found</GridComponent>
            }

{
                !props.loading && props.repoDetail && <GridComponent container className="user-profile"
                direction="row"
                justify="center"
                alignItems="center">
                    <GridComponent item xs={12} className="info-cards">
                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>NAME</h4>
                                <h5>{props.repoDetail.name}</h5>
                            </div>
                        </SimpleCard>
                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>FORK</h4>
                                <h5>{props.repoDetail.fork ? 'Yes' : 'No'}</h5>
                            </div>
                        </SimpleCard>
                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>FORKS COUNT</h4>
                                <h5>{props.repoDetail.forks_count}</h5>
                            </div>
                        </SimpleCard>
                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>NETWORK COUNT</h4>
                                <h5>{props.repoDetail.network_count}</h5>
                            </div>
                        </SimpleCard>

                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>OPEN ISSUES</h4>
                                <h5>{props.repoDetail.open_issues}</h5>
                            </div>
                        </SimpleCard>

                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>SUBSCRIBERS</h4>
                                <h5>{props.repoDetail.subscribers_count}</h5>
                            </div>
                        </SimpleCard>

                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>STAR GAZERS</h4>
                                <h5>{props.repoDetail.stargazers_count}</h5>
                            </div>
                        </SimpleCard>

                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>WATCHERS</h4>
                                <h5>{props.repoDetail.watchers  }</h5>
                            </div>
                        </SimpleCard>
                    </GridComponent>
                </GridComponent>
            }
    </>
}

export default Repository;