import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  appIcon: {
    marginRight: '20px',
  },
  title: {
    marginRight: 40,
  },
  menuContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  subNavContainer: {},
  myAccount: {
    flexGrow: 1,
  },
  button: {
    color: theme.palette.common.white,
  },
  contentRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftNavContainer: {
    width: 200,
    marginRight: 20,
  },
  mainContainer: {
    flex: 1,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));
