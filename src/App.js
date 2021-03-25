import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, withTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './Theme';
import { useStyles } from './App.Styles';
import AppHost from './AppHost';

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <div className={classes.container}>
          <AppHost />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default withTheme(App);
