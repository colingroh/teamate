import React, { createContext } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import {TeaProvider, TeaContext} from "./TeaContext";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Signup from "./Signup"
import UploadImage from "./UploadImage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#103D3A",
    },
    secondary: {
      main: "#62C370",
    },
    background: {
      paper: "#9AACA0",
    },
  },
  typography: {
    fontFamily: "Heiti SC",
  },
});

function App() {
  // const context = createContext(TeaContext);
  // var screen;
  // if(context.screen === "signup"){
  //   screen = <Signup />;
  // } 
  // else if(context.screen === "upload"){
  //   screen = <UploadImage />;
  // }
  // else if(context.screen === "dashboard"){
  //   screen = <Dashboard/>
  // }
  return (
    <MuiThemeProvider theme={theme}>
      <TeaProvider>
        <div className="App">
          <HashRouter>
          <Switch>
          <Route path="/upload">
            <UploadImage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Signup />
          </Route>
          </Switch>
          </HashRouter>
        </div>
      </TeaProvider>
    </MuiThemeProvider>
  );
}

export default App;
