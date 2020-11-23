import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Preferences from './Preferences'
import SuggestedMatches from './SuggestedMatches';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '100%',
    paddingBottom: 0,
    marginBottom: 50
  }
}));


export default function Dashboard() {
  const classes = useStyles();

  function FormRow() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h2>Profile</h2></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h2>I'm looking for a...</h2>
              <Preferences />
          </Paper>
        </Grid>
      </Grid>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <FormRow />
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}><SuggestedMatches/></Paper>
        </Grid>
        <Grid item xs={6} md={6}>
          <Paper className={classes.paper}><h2>Title</h2></Paper>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3}>
    </Grid>
    </div>
  );
}