import React from 'react';
import Signup from './Signup';
import Signin from './Signin';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    form: {
        width: '50%',
        height: '450px',
        margin: '30px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkgray',
        borderRadius: '10px',
        boxShadow: '0px 0px 15px black'
    },
    inputFields: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto'
    },
    button: {
        width: '150px',
        height: '50px',
        marginTop: '20px',
        color: 'white',
        backgroundColor: 'green',
        border: '2px solid black',
        boxShadow: '4px 4px 3px black',
        borderRadius: '7px'
    },
    senseiBtn: {
        width: '125px',
        height: '45px',
        color: 'white',
        backgroundColor: '#218BCC',
        margin: '5px',
        border: '2px solid black',
        borderRadius: '7px',
        boxShadow: '4px 4px 3px black'
    },
    grasshopperBtn: {
        width: '125px',
        height: '45px',
        color: 'black',
        backgroundColor: '#AEEA4F',
        margin: '5px',
        border: '2px solid black',
        borderRadius: '7px',
        boxShadow: '4px 4px 3px black'
    },
    sensei: {
        color: '#218BCC',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    grasshopper: {
        color: '#AEEA4F',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    label: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '350px',
        margin: '8px auto'
    },
})


const Home = (props) =>{

//CSS Styling for Buttons via Material.ui    
const classes = useStyles()

//Onclick push to relevant page
const handleClick = () => {

    props.history.push('/register')

    }



return(
    <>

        <h1>Workout the Way YOU Want to</h1>

        <h3>The Most Amazing Workout Platform in the World</h3>
        <div>
            <button type="button" className={classes.senseiBtn} onClick={() => handleClick()}>Login/Register</button>
            
        </div>

        
    </>
)

}

export default Home