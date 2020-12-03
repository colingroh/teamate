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
import zuko from "./Zuko.png";
import danny from "./danny.jpg";
import dora from "./dora.jpg";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { TeaContext } from "./TeaContext";

const GROUP_DATA = [
  {
    first: "Dorie",
    last: "D'Explorie",
    major: "Theatre",
    int1: "Reading",
    int2: "Microbiology",
    id: "",
  },
  {
    first: "Mark",
    last: "Zukoberg",
    major: "Computer Science",
    int1: "Reading",
    int2: "Privacy",
    id: "",
  },
  {
    first: "John",
    last: "Bee",
    major: "Geography",
    int1: "Maps",
    int2: "Music",
    id: "",
  },
  {
    first: "Daniel",
    last: "Fantome",
    major: "Theatre",
    int1: "Dogs",
    int2: "Soccer",
    id: "",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    marginBottom: 10,
  },
  selected: {
    minWidth: "100%",
    marginBottom: 10,
    background: theme.palette.secondary.main,
  },
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
  const context = useContext(TeaContext);

  const handleChange = () => {
    console.log("pretty colors!");
    context.setSelectedCardID(prop.user.id);
  };

  // let handleClick = (event) => {
  //     {console.log('beepboop')}
  // }

  var coloring;
  if (context.selectedCardID === prop.user.id) {
    coloring = classes.selected;
    console.log("select", { coloring });
  } else {
    coloring = classes.root;
    console.log("root", { coloring });
  }

  return (
    <Card className={coloring} elevation={8}>
      <CardContent>
        <Grid container>
          <Grid item xs={5}>
            <AvatarGroup max={4}>
              <Avatar className={classes.avatar} alt="Dora" src={dora} />
              <Avatar className={classes.avatar} alt="Zuko" src={zuko} />
              <Avatar className={classes.avatar} alt="Johnny" src={johnny} />
              <Avatar
                className={classes.avatar}
                alt="Danny Phantom"
                src={danny}
              />
            </AvatarGroup>
          </Grid>
          <Grid item xs={7}>
            <h3 color="textPrimary"> {prop.user.title}</h3>
          </Grid>
        </Grid>
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
        <Button onClick={() => handleChange()}>Select</Button>
      </CardActions>
    </Card>
  );
}
