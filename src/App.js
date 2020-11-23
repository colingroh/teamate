import React from 'react';
import './App.css';
import Dashboard from './Dashboard'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#103D3A',
    },
    secondary: {
      main: '#103D3A',
    },
    background: {
      paper: '#9AACA0',
    }
  },
  typography: {
    fontFamily: 'Heiti SC',
  }
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
