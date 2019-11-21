import React, { useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import api from '../../utils/api';
import Category from './Category';
import ClassesList from './ClassesList';

export default function CategoriesList() {
    const [category, setCategory] = useState([])

    useEffect(() => {
        api().get(`/api/category`)
            .then(res => {
                setCategory(res.data)
            })
            .catch(err => console.log(err))
    })

    return (
        <>
            {category.map(category => (
                <div key={category.id}>
                    <Category category={category} />

                    <Route path={`/${category.name}`} component={ClassesList} />
                </div>
            ))}
        </>
    )
}