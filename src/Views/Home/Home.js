import { useState } from 'react';
import { Paper, IconButton, InputBase, Box, Button, TextField, Typography } from '@material-ui/core';
import { useStyles } from './Home.Styles';
import { withTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import SearchResult from '../../Components/SearchResult/SearchResult';
import { useHistory } from 'react-router-dom';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function Home(props) {
  const classes = useStyles();
  const history = useHistory();
  const [results, setResults] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({ SearchTerm: '' });

  const handleSearchClick = async (event) => {
    event.preventDefault();
    const results = await axios.post('https://localhost:44346/api/v1.0/Search', searchCriteria);
    setResults(results.data);
  };

  const itemSelectedHandler = (itemId) => {
    history.push(`/details/${itemId}`);
  };

  return (
    <Paper component='form' className={classes.container}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography className={classes.title} variant='h4'>
          Search For Items
        </Typography>
        <Box className={classes.searchContainer} display='flex' alignItems='center' justifyContent='space-between' mb={3}>
          <IconButton className={classes.iconButton} aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <InputBase
            border='1px solid red'
            className={classes.input}
            placeholder='Search...'
            inputProps={{ 'aria-label': 'search' }}
            value={searchCriteria.value}
            onChange={(event) => setSearchCriteria({ SearchTerm: event.target.value })}
          />
          <IconButton border='1px solid red' type='submit' className={classes.iconButton} aria-label='search'>
            <SearchIcon onClick={handleSearchClick} />
          </IconButton>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
          {results.length === 0 && <Typography variant='body'>No Results, why not search for something?</Typography>}
        </Box>
        {results.length > 0 &&
          results.map((result, index) => {
            return (
              <SearchResult
                key={result.itemId}
                itemId={result.itemId}
                img={result.imagePath}
                title={result.title}
                shortDescription={result.shortDescription}
                price={formatter.format(result.price)}
                onItemSelected={itemSelectedHandler}
              />
            );
          })}
      </Box>
    </Paper>
  );
}
export default withTheme(Home);
