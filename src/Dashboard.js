import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Preferences from "./Preferences";
import SuggestedMatches from "./SuggestedMatches";
import { useLayoutEffect } from "react";
import Notifications from "./Notifications";
import HighlightedMatch from "./HighlightedMatch";
import Profile from "./Profile";
import HiddenMatch from "./HiddenMatch";
import SuggestedTeaParties from "./SuggestedTeaParties";
import HighlightedParty from "./HighlightedParty";
import { TeaContext } from "./TeaContext";
import HiddenSuggestions from "./HiddenSuggestions"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 50,
    backgroundColor: "#D3EED7",
  },
  paper: {
    margin: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.primary.main,
    height: "100%",
    overflow: "auto",
    paddingLeft: 20,
    paddingRight: 20,
  },
  matches: {
    margin: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.primary.main,
    overflow: "auto",
    maxHeight: "95vh",
    paddingLeft: 20,
    paddingRight: 20,
  },
  notif: {
    margin: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.primary.main,
    overflow: "auto",
    paddingLeft: 20,
    paddingRight: 20,
    maxHeight: "25vh",
  },
  featured: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: -8,
    textAlign: "left",
    color: theme.palette.primary.main,
    overflow: "auto",
    paddingLeft: 20,
    paddingRight: 20,
  },
}));

export default function Dashboard(props) {
  const context = useContext(TeaContext);
  // function useLockBodyScroll() {
  //     useLayoutEffect(() => {
  //      // Get original body overflow
  //      const originalStyle = window.getComputedStyle(document.body).overflow;
  //      // Prevent scrolling on mount
  //      document.body.style.overflow = 'hidden';
  //      // Re-enable scrolling when component unmounts
  //      return () => document.body.style.overflow = originalStyle;
  //      }, []); // Empty array ensures effect is only run on mount and unmount
  //   }

  const classes = useStyles();

  //useLockBodyScroll();

  function FormRow1() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper px={2} className={classes.paper}>
            <h2>My Profile</h2>
            <Profile />
          </Paper>
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
    var highlight
    if(context.selectedCardID){
        if(context.submittedSearch === "TeaMate"){
      highlight = <HighlightedMatch />;
        }
        else{
          highlight = <HighlightedParty />
        }
   }
   else{
     highlight = <HiddenMatch/>;
   }
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.notif}>
            <h2>Notifications</h2>
            <Notifications />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* <Paper className={classes.featured}> */}
          {highlight}
         
          {/* {store.isHighlighted ? <HighlightedMatch /> : <HiddenMatch />} */}
          {/* </Paper> */}
        </Grid>
      </Grid>
    );
  }

  var suggest = (
    <Paper className={classes.matches} flexGrow = {1}>
      <HiddenSuggestions />
    </Paper>
  );
  if (context.submittedSearch === "TeaParty") {
    suggest = (
      <Paper className={classes.matches}>
        <SuggestedTeaParties />
      </Paper>
    );
  } else if (context.submittedSearch === "TeaMate") {
    suggest = (
      <Paper className={classes.matches}>
        <SuggestedMatches />
      </Paper>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormRow1 />
        </Grid>
        <Grid item xs={5}>
          {suggest}
        </Grid>
        <Grid item xs={4}>
          <FormRow2 />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3}></Grid>
    </div>
  );
}
