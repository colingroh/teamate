import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import johnny from './profile_pic.png';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: "100%",
        marginBottom: 10
    },
    name: {
        height: 24,
        align: 'left'
    },
    major: {
        height: 18,
        marginBottom: 30,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        float: 'right',
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    }
}));

// First Name, Last Name, Major, Interest 1, Interest 2
export default function SimpleCard(prop) {
    const classes = useStyles();

    // const [isHighlighted, updateHighlighted] = useGlobalState("isHighlighted");
    
    // let handleClick = (event) => {
    //     updateHighlighted(changeHighlight)
    // } 

    // function changeHighlight() { 
    //     return !isHighlighted
    // }

    return (
        <Card className={classes.root} elevation={8}>
            <CardContent>
                <Grid container spacing={2}>
                    
                    <Grid item xs={5} > 
                        <Avatar alt="profile picture" src={johnny} className={classes.large} />
                    </Grid>
                    
                    <Grid container item xs={7}>
                      <Grid item md={12}>
                          <Typography className={classes.name} color="textPrimary" component='h2' >
                              {prop.user.first} {prop.user.last}
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography className={classes.major} color="textPrimary" component='h4'>
                              Major: {prop.user.major}
                          </Typography>
                        </Grid>

                        <Grid item md={12}>
                          <Typography variant="body2" component="p" align = 'flex-end' color="textSecondary">
                              Interests: {prop.user.int1}, {prop.user.int2}
                          </Typography>
                        </Grid>

                    </Grid>
              </Grid>
            </CardContent>
            
            <CardActions className={classes.button}>
                <Button>Select</Button >
            </CardActions>
        </Card>
    );
}





