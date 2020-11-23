import React from 'react';
import './App.css';
import Dashboard from './Dashboard'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6E8773',
    },
    secondary: {
      main: green[500],
    }
  },
});

function App() {
  
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
            <Dashboard />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
