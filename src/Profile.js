import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import doug from './doug.jpeg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


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
    picture: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    name: {
      paddingBottom: 20,
    }
  }));


export default function HighlightedMatch() {
    const classes = useStyles();
  return (
    <Box clone pt={0} pr={1} pb={0} pl={2}>
      <Paper elevation={0}>
        <Grid item xs={12}><Typography variant='h5' align='left' className={classes.name}>
          <strong>Doug Dimmadome</strong></Typography></Grid>
        <Grid container spacing={2} alignItems="top" wrap="nowrap">
          <Grid item md={6}>
            <Box bgcolor="primary.main" clone>
              <Avatar alt= 'profile-picture' src={doug} className={classes.picture} />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant='h6'><strong>Major:</strong> Computer Science</Typography>
            <Typography variant='h6'><strong>Interests:</strong> Basketball, Gaming, Biology</Typography>
            <Typography variant='h6'><strong>Currently located:</strong> On Campus</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}