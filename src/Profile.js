import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import doug from "./doug.jpeg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    backgroundColor: "#D3EED7",
  },
  paper: {
    textAlign: "left",
    color: theme.palette.primary.main,
    height: "100%",
    overflow: "auto",
    paddingLeft: 20,
    paddingRight: 20,
  },
  picture: {
    width: "100%",
    height: "auto",
  },
  name: {
    paddingBottom: 20,
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <Box clone pt={0} pr={0} pb={0} pl={0}>
      <Paper elevation={0}>
        <Grid item xs={12}>
          <Typography variant="h5" align="left" className={classes.name}>
            <strong>Doug Dimmadome</strong>
          </Typography>
        </Grid>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={4}>
            <Box bgcolor="primary.main" clone>
              <Avatar
                alt="profile-picture"
                src={doug}
                className={classes.picture}
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">
              <strong>Major:</strong> Computer Science
            </Typography>

            <Typography variant="body1">
              <strong>Interests:</strong> Basketball, Gaming, Biology
            </Typography>
            <Typography variant="body1">
              <strong>Currently located:</strong> On Campus
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="left" wrap="nowrap">
          <Button onClick={() => alert("Profile Edited!")}>Edit Profile</Button>
        </Grid>
      </Paper>
    </Box>
  );
}
