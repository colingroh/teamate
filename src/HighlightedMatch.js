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
      <Box clone pt={2} pr={1} pb={3} pl={2}>
        <Paper elevation={0}>
            <Grid container spacing={2} alignItems="top" wrap="nowrap">
              <Grid item> 
                <Box bgcolor="primary.main" clone>
                  <Avatar alt= 'profile-picture' src={johnny} className={classes.picture} />
                </Box>
              </Grid>
              <Grid item>
                <Typography className={classes.info}><strong>Major:</strong> Biology</Typography>
                <Typography className={classes.info}><strong>Interests:</strong> Gaming, Basketball, Biology</Typography>
                <Typography className={classes.info}><strong>Study Habits:</strong> Late Night Owl</Typography>
                <Typography className={classes.info}><strong>Classes:</strong> Biology, Physics, Cooking, Sitting</Typography>
                <Typography className={classes.info}><strong>Currently located:</strong> On Campus</Typography>

                <Typography><strong>Bio: </strong>The FitnessGram PACER Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.
                The test is used to measure a student's aerobic capacity as part of the FitnessGram assessment.
                Students run back and forth as many times as they can, each lap signaled by a beep sound.
                The test get progressively faster as it continues until the student reaches their max lap score.</Typography>
              </Grid>
            </Grid>
            <Grid container justify='flex-end'>
              <ButtonGroup disableElevation variant="contained" color="primary">
                <Button variant='contained' size='large' className={classes.yes}>Like</Button>
                <Button variant='contained' size='large' className={classes.no}>Dislike</Button>
              </ButtonGroup>
            </Grid>
        </Paper>
      </Box>
  );
}