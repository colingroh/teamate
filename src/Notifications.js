import React from "react";
import { makeStyles, Typography, Box, spacing } from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: theme.spacing(1)
    }
}));


export default function Notifications() {
    const classes = useStyles();
    return (
        <div className="Notifications">
            <Box boxShadow={1}>
                <Typography className={classes.root} color='primary' h4><strong>Some New Info!</strong></Typography>
                <Box pl={3}>
                    <Typography className={classes.root} display='inline' color='secondary' ml={3} h5>The Info is this, and it's very interesting. </Typography>
                </Box>
            </Box>
            <Box boxShadow={1}>
                <Typography className={classes.root} color='primary' h4><strong>Some New Info!</strong></Typography>
                <Box pl={3}>
                    <Typography className={classes.root} display='inline' color='secondary' ml={3} h5>The Info is this, and it's very interesting. </Typography>
                </Box>
            </Box>
            <Box boxShadow={1}>
                <Typography className={classes.root} color='primary' h4><strong>Some New Info!</strong></Typography>
                <Box pl={3}>
                    <Typography className={classes.root} display='inline' color='secondary' ml={3} h5>The Info is this, and it's very interesting. </Typography>
                </Box>
            </Box>
            <Box boxShadow={1}>
                <Typography className={classes.root} color='primary' h4><strong>Some New Info!</strong></Typography>
                <Box pl={3}>
                    <Typography className={classes.root} display='inline' color='secondary' ml={3} h5>The Info is this, and it's very interesting. </Typography>
                </Box>
            </Box>
            <Box boxShadow={1}>
                <Typography className={classes.root} color='primary' h4><strong>Some New Info!</strong></Typography>
                <Box pl={3}>
                    <Typography className={classes.root} display='inline' color='secondary' ml={3} h5>The Info is this, and it's very interesting. </Typography>
                </Box>
            </Box>
            <Box boxShadow={1}>
                <Typography className={classes.root} color='primary' h4><strong>Some New Info!</strong></Typography>
                <Box pl={3}>
                    <Typography className={classes.root} display='inline' color='secondary' ml={3} h5>The Info is this, and it's very interesting. </Typography>
                </Box>
            </Box>
        </div>
    )
}