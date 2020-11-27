import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import johnny from "./profile_pic.png";
import zuko from "./Zuko.png";
import danny from "./danny.jpg";
import dora from "./dora.jpg";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const GROUP_DATA = [
  {
    first: "Dorie",
    last: "D'Explorie",
    major: "Theatre",
    int1: "Reading",
    int2: "Microbiology",
    Picture: "",
  },
  {
    first: "Mark",
    last: "Zukoberg",
    major: "Computer Science",
    int1: "Reading",
    int2: "Privacy",
    Picture: "",
  },
  {
    first: "John",
    last: "Bee",
    major: "Geography",
    int1: "Maps",
    int2: "Music",
    Picture: "",
  },
  {
    first: "Daniel",
    last: "Fantome",
    major: "Theatre",
    int1: "Dogs",
    int2: "Soccer",
    Picture: "",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    marginBottom: 10,
  },
  name: {},
  major: {},
  pos: {},
  button: {
    float: "right",
  },
  large: {},
  avatar: {},
}));

// first, last, major, int1, int2
export default function SimpleCard(prop) {
  const classes = useStyles();

  // let handleClick = (event) => {
  //     {console.log('beepboop')}
  // }

  return (
    <Card className={classes.root} elevation={8}>
      <CardContent>
        <AvatarGroup max={4}>
          <Avatar className={classes.avatar} alt="Dora" src={dora} />
          <Avatar className={classes.avatar} alt="Zuko" src={zuko} />
          <Avatar className={classes.avatar} alt="Johnny" src={johnny} />
          <Avatar className={classes.avatar} alt="Danny Phantom" src={danny} />
        </AvatarGroup>
        <Grid container>
          {GROUP_DATA.map((user) => (
            <>
              <Grid item xs={6}>
                <Typography
                  className={classes.name}
                  color="textPrimary"
                  component="h2"
                >
                  {user.first} {user.last}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  className={classes.major}
                  color="textPrimary"
                  component="h4"
                >
                  {user.major}
                </Typography>
              </Grid>
            </>
          ))}
        </Grid>
        <Grid xs={12}>
          <Typography color="textPrimary" component="h4">
            Similarities: Physics 1, Basketball, Morning People
          </Typography>
        </Grid>
      </CardContent>
      <CardActions className={classes.button}>
        <Button>Select</Button>
      </CardActions>
    </Card>
  );
}
