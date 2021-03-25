import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#039be5',
      light: '#63ccff',
      dark: '#006db3',
    },
    secondary: {
      main: '#9e9e9e',
      light: '#cfcfcf',
      dark: '#707070',
    },
  },
  typography: {
    fontFamily: ['Muli', 'sans-serif'].join(','),
  },
});
