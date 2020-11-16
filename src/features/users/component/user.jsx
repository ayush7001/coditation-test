import React from 'react';
import {NavLink}  from 'react-router-dom';
import Table from '@material-ui/core/Table/Table';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableHead from '@material-ui/core/TableHead/TableHead';
import SimpleCard from '../../../shared/components/cards/simple-card';
import GridComponent from '../../../shared/components/grid/grid';

import './user.css'
import Loader from '../../../shared/components/loaders/loader';

const UserProfile = props => {
    const userProfile = props.userDetail;
    console.log(userProfile, props.repos)
    return <>
      
            {
                props.loading && <GridComponent container className="loader-div"
                direction="row"
                justify="center"
                alignItems="center"><Loader /></GridComponent>
            }
            {
                !props.loading && userProfile &&  <GridComponent container  className="user-profile">
                    <GridComponent item xs={12}>
                        <div className="user-image">
                            <img src={userProfile.avatar_url}  alt="user_image"/>
                        </div>
                        <h3>{userProfile.name}</h3>
                    </GridComponent>
                    <GridComponent item xs={12} className="info-cards">
                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>Followers</h4>
                                <h5>{userProfile.followers}</h5>
                            </div>
                        </SimpleCard>
                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>Following</h4>
                                <h5>{userProfile.following}</h5>
                            </div>
                        </SimpleCard>
                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>Public Repositories</h4>
                                <h5>{userProfile.public_repos}</h5>
                            </div>
                        </SimpleCard>

                        <SimpleCard title={""} classes={{content: 'card-content', root: 'card-root'}}>
                            <div className="info">
                                <h4>Gists</h4>
                                <h5>{userProfile.public_gists}</h5>
                            </div>
                        </SimpleCard>
                    </GridComponent>
                </ GridComponent>
            }

            {
                !!props.repos.length && props.repos && 
                
                <Table stickyHeader className="highlight">            
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Sr No.
                                </TableCell>
                                <TableCell>
                                   Repo Name
                                </TableCell>
                                <TableCell>
                                    Forks
                                </TableCell>
                                <TableCell>
                                    Is Fork
                                </TableCell>
                                <TableCell>
                                    Watchers
                                </TableCell>
                                <TableCell>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>
                        {
                            !props.repos.length ? <TableRow>
                                <TableCell>
                                        No Data Found
                                </TableCell>
                                </TableRow> : props.repos.map((obj, index) => {
                                return <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell> 
                                    
                                    <TableCell>{obj.name}</TableCell>
                                    <TableCell>{obj.forks}</TableCell>
                                    <TableCell>{obj.fork ? 'Yes' : 'No'}</TableCell>
                                    <TableCell>{obj.watchers_count}</TableCell>
                                    <TableCell><NavLink to={`/users/${obj.owner.login}/${obj.name}`}> View </NavLink></TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            }
    </>
}

export default UserProfile;