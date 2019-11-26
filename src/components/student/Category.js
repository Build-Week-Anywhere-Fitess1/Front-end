import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    category: {
        textDecoration: 'none',
        color: 'black',
        border: '2px solid #636363',
        borderRadius: '5px',
        padding: '10px 25px',
        backgroundColor: '#AEEA4F'
    }
})

export default function Category(props) {
    const classes = useStyles();

    return (
        <div>
            <Link className={classes.category} to={`/student/${props.categories.name}`}>{props.categories.name}</Link>
        </div>
    )
}