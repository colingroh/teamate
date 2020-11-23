import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import johnny from './profile_pic.png';
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
    }
  }));


export default function HighlightedMatch() {
    const classes = useStyles();
  return (
    <Box clone pt={2} pr={1} pb={1} pl={2}>
      <Paper elevation={0}>
        <Grid container spacing={2} alignItems="center" wrap="nowrap">
          <Grid item>
            <Box bgcolor="primary.main" clone>
              <Avatar alt= 'profile-picture' src={johnny} className={classes.picture} />
            </Box>
          </Grid>
          <Grid item>
            <Typography>You have lost connection to the internet. This app is offline.</Typography>
          </Grid>
        </Grid>
        <Grid container justify="flex-end" spacing={1}>
          <Grid item>
            <Button color="primary">Turn on wifi</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}