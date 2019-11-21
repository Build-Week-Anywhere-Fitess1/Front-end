import React from 'react';
import { Route, Link } from 'react-router-dom';

import CategoriesList from './CategoriesList';
import ClassesList from './ClassesList';

export default function BreadCrumbsList() {
  return (
    <div>
      <CategoriesList />

    </div>
  )
}