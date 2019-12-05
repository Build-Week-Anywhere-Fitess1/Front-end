import React, { useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import api from '../../utils/api';
import Category from './Category';
import ClassesList from './ClassesList';


export default function CategoriesList(props) {
    return (
        <>
            {props.categories.map(category => (
                <div key={category.id}>
                    <Category categories={category} />
                </div>
            ))}
        </>
    )
}