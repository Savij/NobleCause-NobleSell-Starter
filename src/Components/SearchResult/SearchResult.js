import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './SearchResult.Styles';
import { withTheme } from '@material-ui/core/styles';
import Guitar2 from '../../Assets/Images/guitar2.jpg';

function SearchResult({ itemId, img, title, shortDescription, price, onItemSelected }) {
  const classes = useStyles();

  const itemSelectHandler = () => {
    onItemSelected(itemId);
  };
  return (
    <Box
      className={classes.container}
      border='1px solid #888'
      borderRadius={5}
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box p={2} mr={2}>
        <img className={classes.image} src={`images/${img}`} alt='item for sale' />
      </Box>
      <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        <Box className={classes.title} onClick={itemSelectHandler} p={2}>
          <Typography variant='h6' color='primary'>
            {title}
          </Typography>
        </Box>
        <Box flexWrap='wrap' p={2}>
          <Typography variant='body1'>{shortDescription}</Typography>
        </Box>
      </Box>

      <Box p={2} ml={2} mr={2}>
        <Typography variant='h6' color='primary'>
          {price}
        </Typography>
      </Box>
    </Box>
  );
}
export default withTheme(SearchResult);
