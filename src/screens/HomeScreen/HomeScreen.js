import React from 'react';

import logo from './cooked.png';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
import { Button, TextField } from '@material-ui/core';

const AddRecipeScreen = () => {
  return (
    <div>
      <Navbar />
      <div class="logo-container">
        <img src={logo} alt="Cooked - Making the leftovers a festivity"/>
      </div>
    </div>
  );
};

export default AddRecipeScreen;
