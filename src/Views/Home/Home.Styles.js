import { theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: 20,
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  form: {
    width: '100%',
  },
  searchContainer: {
    backgroundColor: theme.palette.common.white,
    width: '60%',
  },
  input: {
    backgroundColor: theme.palette.common.white,
    flex: 1,
  },
  iconButton: {
    margin: '0 10px',
  },
  title: {
    marginBottom: 20,
    fontWeight: 300,
    color: theme.palette.primary.light,
  },
  searchBox: {
    width: 500,
  },
}));
