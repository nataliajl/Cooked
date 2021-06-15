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
      <div>
        <Navbar />
      </div>

      <div className={classes.page}>
        <div>
          <Filter />
        </div>
        <div>
          <img src={logo} alt="Cooked - Making the leftovers a festivity"/>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
