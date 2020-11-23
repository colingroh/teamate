import React from 'react';
import './App.css';
import Dashboard from './Dashboard'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6E8773',
    },
    secondary: {
      main: '#2D9F99',
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
