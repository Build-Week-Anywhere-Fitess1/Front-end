import React from 'react';
import api from '../../utils/api';

function Class(props) {
    function addThisClass(e) {
        e.preventDefault()

        api().post(`/api/KenStudent/classes/${props.classes.id}`)
            .then(res => {
                console.log("Success!", res)
            })
            .catch(err => console.log(err))

        window.alert("You have registered for this class!")
    }

    return (
        <div className="container">
            <h2>Title: {props.classes.title}</h2>
            <p>Time: {props.classes.scheduleTime}</p>
            <p>Address: 
                <span>{props.classes.address}</span>
                <span>{props.classes.city}</span>
                <span>{props.classes.state}</span>
                <span>{props.classes.zipCode}</span>
            </p>
            <button onClick={addThisClass}>Add Class</button>
        </div>
    )
}

export default Class;