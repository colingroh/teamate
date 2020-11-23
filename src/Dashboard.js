import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Preferences from './Preferences';
import SuggestedMatches from './SuggestedMatches';
import Notifications from './Notifications';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#D3EED7',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.primary.main,
    height: '100%',
    paddingBottom: 0,
    overflow: 'auto'
  },
  
}));


export default function Dashboard(props) {
  const classes = useStyles();

  function FormRow1() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h2>Profile</h2></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h2>Preferences</h2>
              <Preferences />
          </Paper>
        </Grid>
      </Grid>
    );
  }

  function FormRow2() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper className={classes.paper}><h2>Notifications</h2>
            <Notifications />
            </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h2>Profile</h2></Paper>
        </Grid>
      </Grid>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <FormRow1 />
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paper}><SuggestedMatches/></Paper>
        </Grid>
        <Grid item xs={6} md={6}>
          <FormRow2 />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3}>
    </Grid>
    </div>
  );
}