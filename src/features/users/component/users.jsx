import React from 'react';
import {NavLink}  from 'react-router-dom';
import Table from '@material-ui/core/Table/Table';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableHead from '@material-ui/core/TableHead/TableHead';

import GridComponent from '../../../shared/components/grid/grid';
import Loader from '../../../shared/components/loaders/loader';


const UsersListComponent = props => {
    return <>
        {props.loading ?<GridComponent container className="loader-div"
                direction="row"
                justify="center"
                alignItems="center"><Loader /></GridComponent>:
            <div>
                <Table stickyHeader aria-label="sticky table">            
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Sr No.
                                </TableCell>
                                <TableCell>
                                    Avtar
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Type
                                </TableCell>
                                <TableCell>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>
                        {
                            !props.loading && !props.users ? <TableRow>
                                <TableCell>
                                        No Data Found
                                </TableCell>
                                </TableRow> : props.users.map((obj, index) => {
                                return <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell> 
                                    <TableCell>
                                         <div style={{height:'75px', width: '75px'}}>
                                            <img src={obj.avatar_url} alt="avtar_img" style={{height:'50px', width: '50px' , borderRadius: '50px'}} />
                                        </div>
                                    </TableCell>
                                    <TableCell>{obj.login}</TableCell>
                                    <TableCell>{obj.type}</TableCell>
                                    <TableCell><NavLink to={`/users/${obj.login}`}> View </NavLink></TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>

                </Table>
            </div>
        }
    </>
}

export default UsersListComponent;