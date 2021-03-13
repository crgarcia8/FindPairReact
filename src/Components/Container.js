import React from 'react';
import './card.scss';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import Card from './card';

export default function Container() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid><Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid><Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid>
      <Grid item xs={3}>
        <Card />
      </Grid>
    </Grid>
  );
}
