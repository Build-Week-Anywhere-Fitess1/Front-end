import React from 'react';
import { Link } from 'react-router-dom';

export default function Category(props) {


    return (
        <div>
            <Link to={`/${props.category.name}`}>{props.category.name}</Link>
        </div>
    )
}