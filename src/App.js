import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Height from './Components/card';
import {  Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 150
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={5}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
