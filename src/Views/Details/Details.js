import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './Details.Styles';
import { withTheme } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import Shipping from '../../Assets/Images/shipping.png';
import axios from 'axios';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
/*
public int ItemId { get; set; }
        public bool IsNewListing { get; set; }
        public string ImagePath { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }
        public decimal Price { get; set; }
        public DateTime DatePosted { get; set; }
*/
function Details() {
  const classes = useStyles();
  const [item, setItem] = useState({
    itemId: -1,
    imagePath: '',
    title: '',
    shortDescription: '',
    longDescription: '',
    price: '',
    datePosted: '',
  });

  let { itemId } = useParams();

  useEffect(() => {
    const init = async () => {
      const result = await axios.get(`https://localhost:44346/api/v1.0/Search/details/${itemId}`);
      setItem(result.data);
    };
    init();
  }, [itemId]);

  return (
    <Box className={classes.container} display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
      <Box border='1px solid #888' p={1}>
        <img className={classes.image} src={`/images/${item.imagePath}`} alt={item.imagePath} />
      </Box>
      <Box
        className={classes.innerContainer}
        border='1px solid #888'
        borderRadius={5}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box p={2} ml={2} mr={2}>
          <Typography variant='h6' color='primary'>
            {formatter.format(item.price)}
          </Typography>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
          <Box className={classes.title} p={2}>
            <Typography variant='h6' color='primary'>
              {item.title}
            </Typography>
          </Box>
          <Box flexWrap='wrap'>
            <Typography variant='body1'>{item.shortDescription}</Typography>
          </Box>
          <Box flexWrap='wrap' p={2}>
            <Typography variant='body1'>{item.longDescription}</Typography>
          </Box>
        </Box>

        <Box p={2} ml={2} mr={2}>
          <Typography variant='h6' color='primary'>
            <Button variant='contained' color='primary'>
              Buy Now!
            </Button>
          </Typography>
        </Box>
      </Box>
      <img src={Shipping} alt='shipping' />
    </Box>
  );
}
export default withTheme(Details);
