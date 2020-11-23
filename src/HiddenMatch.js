import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import johnny from './profile_pic.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import selectedUser from './Dashboard';
import Hidden from '@material-ui/core'

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
    yes: {
      backgroundColor: '#5cdb5c',
    },
    no: {
      backgroundColor: '#ff0021'
    },
    info: {
      paddingBottom: 40

    }
  }));


  export default function HighlightedMatch() {
  const classes = useStyles();

  return (
      <Box clone pt={2} pr={1} pb={20} pl={2}>
        <Paper elevation={0}>
            <Grid container spacing={2} alignItems="top">
              <Grid item xs={12} wrap='nowrap'> 
                <h3>Click on a suggested match to learn more about them!</h3>
              </Grid>
              <Grid item xs={12}> 
                <Box bgcolor="primary.main" clone>
                  <Avatar alt= 'profile-picture' className={classes.picture} />
                </Box>
              </Grid>
              <Grid item>
                <Typography className={classes.info}><strong></strong></Typography>
                <Typography className={classes.info}><strong></strong></Typography>
                <Typography className={classes.info}><strong></strong></Typography>
                <Typography className={classes.info}><strong></strong></Typography>
                <Typography className={classes.info}><strong></strong></Typography>

                <Typography><strong></strong></Typography>
              </Grid>
            </Grid>
            <Grid container justify='flex-end'>
        
            </Grid>
        </Paper>
      </Box>
  );
}