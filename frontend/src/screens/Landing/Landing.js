import React from 'react';

import Filter from '../../components/Filter/Filter';
import logo from './Home Landing.png';
import './home.css';
import 'fontsource-roboto';
import Navbar from '../../components/Navbar/Navbar';
import { Grid } from '@material-ui/core';
import {useStyles } from './LandingStyles';

const HomeScreen = () => {
  const classes = useStyles();
  return ( 
    <div className={classes.root}>
    <Grid container spacing={1} >

      <Grid item xs={12} >
        <Navbar />
      </Grid>
      <Grid item xs={6}>
        <Filter />
      </Grid>
      <Grid item xs={6}>
        <img src={logo} alt="Cooked - Making the leftovers a festivity"/>
      </Grid>
    </Grid>
    </div>
  );
};

export default HomeScreen;
