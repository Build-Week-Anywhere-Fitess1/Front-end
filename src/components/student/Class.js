import React from 'react';
import api from '../../utils/api';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        height: '175px',
        margin: '15px auto',
        border: '2px solid black',
        borderRadius: '5px',
        backgroundColor: '#218BCC'
    },
    pContainer: {
        display: 'flex',
        flexDirection: 'column',
        
    },
    header: {
        marginTop: '5px'
    },
    paragraph: {
        margin: '5px auto',
        
    },
    button: {
        width: '40%',
        height: '50px',
        margin: '0 auto',
        border: '2px solid white',
        borderRadius: '5px',
        backgroundColor: '#AEEA4F'
    }
})

function Class(props) {
    const classes = useStyles();

    function addThisClass(e) {
        e.preventDefault()

        api().post(`/api/user/classes/${props.classes.id}`)
            .then(res => {
                
                window.alert("You have registered for this class!")
            })
            .catch(err => console.log(err))

    }

    return (
        <div className={classes.container}>
            <h2 className={classes.header}>{props.classes.title}</h2>
            <div className={classes.pContainer}>
                <p className={classes.paragraph}>Time: {props.classes.scheduleTime}</p>
                <p className={classes.paragraph}>Address: 
                    <span>{props.classes.address}</span>
                    <span>{props.classes.city}</span>
                    <span>{props.classes.state}</span>
                    <span>{props.classes.zipCode}</span>
                </p>
            </div>
            <button className={classes.button} onClick={addThisClass}>Add Class</button>
        </div>
    )
}

export default Class;