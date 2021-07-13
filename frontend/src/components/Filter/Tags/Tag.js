import React from 'react';
import { useStyles } from './TagStyles';
import { AddCircleRounded } from '@material-ui/icons';
import {IconButton, Chip, InputBase} from '@material-ui/core';

export default function ChipsArray(props){
  const classes = useStyles();

  return ( 
    <div className={classes.root}>
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
            <AddCircleRounded className={classes.img} />
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
