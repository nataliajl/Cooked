import React from 'react';
import { useStyles } from './TagStyles';
import { AddCircleRounded } from '@material-ui/icons';
import {IconButton, Chip, InputBase} from '@material-ui/core';
import {useFormControls} from './../FormControls';

export default function ChipsArray(){
  const classes = useStyles();
  const {     
    inputData,
    chipData,
    handleChange,
    handleAddChip,
    handleDelete,
  } = useFormControls();
  

  return ( 
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.input}>
          <InputBase
          placeholder='Please enter your ingredients'
          value={inputData}
          onChange={event => handleChange(event)}
          />
        </div>

        <div className={classes.button}>
          <IconButton onClick={handleAddChip}>
            <AddCircleRounded className={classes.img} />
          </IconButton>
        </div>
      </div>
      

      <div className={classes.tag}>
          {chipData.map((data) => (
            <li key={data.key}>
              <Chip
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chip}
              classes = {{deleteIcon: classes.deleteIcon}}
      
              />
            </li>
          ))}
      </div>
    </div>
  );
}
