import { theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: '50%',
    marginBottom: 40,
    backgroundColor: theme.palette.common.white,
  },
  image: {
    maxWidth: 125,
  },
  title: {
    cursor: 'pointer',
  },
}));
