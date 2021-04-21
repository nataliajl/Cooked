import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import { Button, TextField } from '@material-ui/core';

const AddRecipeScreen = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div>
        <Navbar />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '300px',
            minWidth: '250px',
            alignContent: 'left',
            justifyContent: 'left',
          }}
        />
      </div>
    </div>
  );
};

export default AddRecipeScreen;
