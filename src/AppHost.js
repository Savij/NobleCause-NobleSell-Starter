import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import React from 'react';
import { BrowserRouter as Router, Link as RouterLink, Route, Switch, withRouter } from 'react-router-dom';
import { useStyles } from './AppHost.Styles';
import Details from './Views/Details/Details';
import Home from './Views/Home/Home';

function AppHost(props) {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.container}>
        <AppBar position='static'>
          <Toolbar>
            <MonetizationOn className={classes.appIcon} />
            <Typography data-testid='appBarTest' variant='h6' color='inherit' noWrap className={classes.title}>
              NobleSell
            </Typography>
            <div className={classes.menuContainer}>
              <div>
                <Button className={classes.button} component={RouterLink} to='/'>
                  Search
                </Button>
              </div>
              <div>
                <Button className={classes.button} component={RouterLink} to='/details'>
                  Details
                </Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>

        <div className={classes.contentRow}>
          <div className={classes.mainContainer}>
            <Switch>
              <Route path='/search' component={Home} />
              <Route path='/details/:itemId' component={Details} />
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default withTheme(withRouter(AppHost));
