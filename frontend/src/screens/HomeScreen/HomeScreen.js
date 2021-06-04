import React from 'react';

import logo from './cooked.png';
import './home.css';
import 'fontsource-roboto';
import Navbar from '../../components/Navbar/Navbar';
import { Button } from '@material-ui/core';

const HomeScreen = () => {
  return ( 
    <div>
      <Navbar />
      <div class="logo-container">
        <img src={logo} alt="Cooked - Making the leftovers a festivity"/>
      </div>
      <div class="buttons-container">
        <Button size='small' variant='contained' color='primary' href="">
          <a>Add Recipe</a>
        </Button>
      </div>
    </div>
  );
};

export default HomeScreen;
