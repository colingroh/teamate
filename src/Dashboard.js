import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Preferences from './Preferences'
import SuggestedMatches from './SuggestedMatches'
import { useLayoutEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#D3EED7',
  },
  paper: {
    margin: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.primary.main,
    height: '100%',
    overflow: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
  },
  matches: {
    margin: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.primary.main,
    overflow: 'auto',
    height: '90%',
    paddingLeft: 20,
    paddingRight: 20,
  }
}));


export default function Dashboard(props) {
    function useLockBodyScroll() {
        useLayoutEffect(() => {
         // Get original body overflow
         const originalStyle = window.getComputedStyle(document.body).overflow;  
         // Prevent scrolling on mount
         document.body.style.overflow = 'hidden';
         // Re-enable scrolling when component unmounts
         return () => document.body.style.overflow = originalStyle;
         }, []); // Empty array ensures effect is only run on mount and unmount
      }

    const classes = useStyles();

    useLockBodyScroll();

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
            <Paper className={classes.paper}><h2>Title</h2></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h2>Title</h2></Paper>
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
          <Paper className={classes.matches}><SuggestedMatches/></Paper>
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