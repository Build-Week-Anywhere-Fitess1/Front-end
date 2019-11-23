import React from 'react';
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import CategoriesList from './CategoriesList';

const useStyles = makeStyles({
  container: {
      display: 'flex',
      justifyContent: 'space-around'
  }
})

export default function BreadCrumbsList() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CategoriesList />

    </div>
  )
}