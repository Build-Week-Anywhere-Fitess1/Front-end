import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import Class from './Class';

export default function ClassesList(props) {
    const [userClasses, setUserClasses] = useState([])

    useEffect(() => {
        api().get(`/api/classes`)
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
                <Class key={classes.id} classes={classes}/>
            ))}
        </div>
    )
}