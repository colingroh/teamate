import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import { TeaProvider } from "./TeaContext";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
  return (
    <MuiThemeProvider theme={theme}>
      <TeaProvider>
        <div className="App">
          <Dashboard />
        </div>
      </TeaProvider>
    </MuiThemeProvider>
  );
}

export default App;
