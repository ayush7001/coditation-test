import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent'


const useStyles = makeStyles({
    root: {
      minWidth: 200,
      padding: '5px'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 5,
    },
  });
  

const SimpleCard = props => {
    const classes = useStyles();
    return <Card className={`${classes.root} ${props.classes.root}`} variant="outlined">
    <CardContent  className={props.classes.content}>
        {
            props.title !== "" && 
            <h4 className={classes.title} color="textSecondary" gutterBottom>
            {props.title}
            </h4>
        }
        <div>
            {props.children}
        </div>

     
    </CardContent>
  </Card>
}

export default  SimpleCard