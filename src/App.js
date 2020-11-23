import React from 'react';
import './App.css';
import Dashboard from './Dashboard'
import Login from './Login'

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
<<<<<<< HEAD
            <Dashboard />
            <Login />
=======
          <Dashboard />
>>>>>>> b4d31cad66a3ca726b32cbff370cc8b501b3604e
      </div>
    </MuiThemeProvider>
  );
}

export default App;
