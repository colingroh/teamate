import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import johnny from "./profile_pic.png";
import {TeaContext} from "./TeaContext"

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    marginBottom: 10,
    raised: false,
  },
  selected:{
    minWidth: "100%",
    marginBottom: 10,
    background: theme.palette.secondary.main,
    raised: true,
  },
  name: {
    textAlign: "left",
  },
  major: {
    marginBottom: 18,
  },
  button: {
    float: "right",
  },
  large: {
    width: "100%",
    height: "auto",
  },
}));

// First Name, Last Name, Major, Interest 1, Interest 2
export default function SimpleCard(prop) {
  const classes = useStyles();
  const context = useContext(TeaContext);

  const handleChange = () => {
      console.log("pretty colors!")
      context.setSelectedCardID(prop.user.id);
  };
  // const [isHighlighted, updateHighlighted] = useGlobalState("isHighlighted");

  // let handleClick = (event) => {
  //     updateHighlighted(changeHighlight)
  // }

  // function changeHighlight() {
  //     return !isHighlighted
  // }
  var coloring;
  if(context.selectedCardID === prop.user.id){
    coloring = classes.selected
    console.log("select",{coloring})
  }
  else{
    coloring = classes.root
    console.log("root",{coloring})
  }

  return (
    <Card className={coloring} elevation={8}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography
              className={classes.name}
              color="textPrimary"
              component="h2"
            >
              <strong>
                {prop.user.first} {prop.user.last}
              </strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Avatar
              alt="profile picture"
              src={johnny}
              className={classes.large}
            />
          </Grid>

          <Grid item xs={8}>
            <Typography
              className={classes.major}
              color="textPrimary"
              component="h4"
            >
              Major: {prop.user.major}
            </Typography>

            <Typography
              variant="body2"
              component="p"
              align="flex-end"
              color="textSecondary"
            >
              Interests: {prop.user.int1}, {prop.user.int2}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions className={classes.button}>
        <Button onClick= {() => handleChange()}>Select</Button>
      </CardActions>
    </Card>
  );
}
