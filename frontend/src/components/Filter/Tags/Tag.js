import React from 'react';
import { AddCircleRounded } from '@material-ui/icons';
import {IconButton, Chip, InputBase} from '@material-ui/core';
import { useStyles } from '../../../screens/LandingScreen/LandingStyles';

export default function ChipsArray(props){
  const classes = useStyles();

  return ( 
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.input}>
          <InputBase
          placeholder='Please enter your ingredients'
          value={props.value}
          onChange={props.onChange}
          />
        </div>

        <div className={classes.button}>
          <IconButton onClick={props.onClick}>
            <AddCircleRounded className={classes.plusB} />
          </IconButton>
        </div>
      </div>
      

      <div className={classes.tag}>
          {props.data.map((data) => (
            <li key={data.key}>
              <Chip
              label={data.label}
              onDelete={props.onDelete(data)}
              className={classes.chip}
              classes = {{deleteIcon: classes.deleteIcon}}
              />
            </li>
          ))}
      </div>
    </div>
  );
}
