import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import johnny from './profile_pic.png';
import zuko from './Zuko.png';
import danny from './danny.jpg';
import dora from './dora.jpg';
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
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginBottom: 10,
    },
    yes: {
      backgroundColor: '#5cdb5c',
    },
    no: {
      backgroundColor: '#ff0021'
    },
    info: {
      marginTop: 30,
      marginBottom: 85,
      marginRight: 20,
    }
  }));


  export default function HighlightedMatch() {
  const classes = useStyles();

  return (
      <Box clone pb={1} pr={1} pl={2}>
        <Paper elevation={0}>
            <h2 >Tea Party</h2>
            <Grid container spacing={2} alignItems="top" wrap="nowrap">
              <Grid item> 
                  <Avatar className={classes.picture} alt="Remy Sharp" src={dora}/>
                  <Avatar className={classes.picture} alt="Travis Howard" src={zuko} />
                  <Avatar className={classes.picture} alt="Cindy Baker" src={johnny} />
                  <Avatar className={classes.picture} alt="Danny Baker" src={danny} />
              </Grid>
              <Grid item>
                <Typography className={classes.info}><strong>Remy Sharp</strong></Typography>
                <Typography className={classes.info}><strong>Travis Howard</strong></Typography>
                <Typography className={classes.info}><strong>Cindy Baker</strong></Typography>
                <Typography className={classes.info}><strong>Danny Baker</strong></Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.info}>Major: Theatre</Typography>
                <Typography className={classes.info}>Major: Computer Science</Typography>
                <Typography className={classes.info}>Major: Biology</Typography>
                <Typography className={classes.info}>Major: Physics</Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.info}>Interests: Dogs, Basketball</Typography>
                <Typography className={classes.info}>Interests: Physics, Basketball</Typography>
                <Typography className={classes.info}>Interests: Football, Basketball</Typography>
                <Typography className={classes.info}>Interests: Biology, Eggs</Typography>
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