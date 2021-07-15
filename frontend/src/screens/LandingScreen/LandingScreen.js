import React from 'react';
import Typography from '@material-ui/core/Typography';
import Filter from '../../components/Filter/Filter';
import homeVisual from './home-img.png';
import Navbar from '../../components/Navbar/Navbar';
import {useStyles } from './LandingStyles';

const LandingScreen = () => {
  const classes = useStyles();
  return ( 
    <div className={classes.root}>
      <Navbar />
      
      <div className={classes.content}>

        <div className={classes.leftContainer}>
          <div className={classes.text}>
            <Typography variant='h3' component='name'>
              Cooked
            </Typography>
            <Typography variant='h5' component='slogan'>
              Make the leftovers a festivity
            </Typography>
          </div>
          <Filter />
        </div>
        
        <div className={classes.rightContainer}>
          <img src={homeVisual} alt="Cooked - Making the leftovers a festivity"/>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
