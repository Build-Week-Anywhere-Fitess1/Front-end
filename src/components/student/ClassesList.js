import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import Class from './Class';

export default function ClassesList(props) {
    const user = localStorage.getItem("username");
    const [userClasses, setUserClasses] = useState([])

    useEffect(() => {
        api().get(`/api/user/classes`)
            .then(res => {
                setUserClasses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    return (
        <div>
            {userClasses.map(classes => (
                <Class classes={classes}/>
            ))}
        </div>
    )
}