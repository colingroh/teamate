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
import zuko from './Zuko.png';
import danny from './danny.jpg';
import dora from './dora.jpg';
import AvatarGroup from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: "100%",
        marginBottom: 10
    },
    name: {
        height: 24,
        align: 'left',
        marginTop: 5,
        marginBottom: 30,
        marginLeft: -50,
    },
    major: {
        height: 18,
        marginLeft: -35,
        marginTop: 5,
        marginBottom: 35,
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
    },
    avatar: {
        marginLeft: 0,
        marginBottom: 10
    }
}));

// First Name, Last Name, Major, Interest 1, Interest 2
export default function SimpleCard(prop) {
    const classes = useStyles();

    // let handleClick = (event) => {
    //     {console.log('beepboop')}
    // } 

    return (
        <Card className={classes.root} elevation={8}>
            <CardContent>

                <Grid container>
                    <Grid item xs={4}>
                        <Avatar className={classes.avatar} alt="Remy Sharp" src={dora}/>
                        <Avatar className={classes.avatar} alt="Travis Howard" src={zuko} />
                        <Avatar className={classes.avatar} alt="Cindy Baker" src={johnny} />
                        <Avatar className={classes.avatar} alt="Danny Baker" src={danny} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography className={classes.name} color="textPrimary" component='h2' >
                            Remy Sharp
                        </Typography>
                        <Typography className={classes.name} color="textPrimary" component='h2' >
                            Travis Howard
                        </Typography>
                        <Typography className={classes.name} color="textPrimary" component='h2' >
                            Cindy Baker
                        </Typography>
                        <Typography className={classes.name} color="textPrimary" component='h2' >
                            Danny Baker
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography className={classes.major} color="textPrimary" component='h4'>
                            Major: Theatre
                        </Typography>
                        <Typography className={classes.major} color="textPrimary" component='h4'>
                            Major: Computer Science
                        </Typography>
                        <Typography className={classes.major} color="textPrimary" component='h4'>
                            Major: Biology
                        </Typography>
                        <Typography className={classes.major} color="textPrimary" component='h4'>
                            Major: Physics
                        </Typography>
                    </Grid>

                    {/* <Grid item xs={4}>
                        <Typography variant="body2" component="p" align = 'flex-end' color="textSecondary">
                            Interests: {prop.user.int1}, {prop.user.int2}
                        </Typography>
                    </Grid> */}
                </Grid>
                <Grid xs={12}>
                    <Typography color="textPrimary" component='h4'>
                        Similarities: Physics 1, Basketball, Morning People
                    </Typography>
                </Grid>
            </CardContent>
                <CardActions className={classes.button}>
                    <Button>Select</Button >
                </CardActions>
        </Card>
    );
}





