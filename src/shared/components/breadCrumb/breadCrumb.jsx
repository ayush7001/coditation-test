import React from 'react'

import Breadcrumbs from '@material-ui/core/Breadcrumbs/Breadcrumbs';
import {NavLink} from 'react-router-dom'

import './breadCrumb.css'


const Breadcrumb = props => {
    return <>
        <Breadcrumbs aria-label="breadcrumb">
            <NavLink to="/users" className="title" color="inherit" >Users</NavLink>
            {
                props.username && props.username !== "" && <NavLink to={`/users/${props.username}`} className="title">{props.username}</NavLink>
            }

            {
                props.repo && props.repo !== "" && <NavLink to={`/users/${props.username}/${props.repo}`} className="title">{props.repo}</NavLink>
            }
            
        </Breadcrumbs>
    </>
} 

export default Breadcrumb