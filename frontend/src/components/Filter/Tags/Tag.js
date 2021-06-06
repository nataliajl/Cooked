import React from 'react';
import { useStyles } from './TagStyles';
import { AddCircleRounded } from '@material-ui/icons';
import {IconButton, Chip, InputBase} from '@material-ui/core';
import { colors } from '../../../cookedStyles.js';

export default function ChipsArray(){
  const classes = useStyles();

  const [inputData, setInputData] = React.useState("");

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Onion' },
    { key: 1, label: 'Tomato' },
    { key: 2, label: 'Cucumber' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleChange = (input)  => {
    setInputData(input.target.value);
  };

  const handleSubmit= () => {
    let newChipData = [...chipData];
    if (inputData.length != 0) {
      newChipData = [...newChipData, {key: chipData.length, label: inputData}];
    }
    setInputData("");
    setChipData(newChipData);
  };

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
          <IconButton onClick={handleSubmit}>
            <AddCircleRounded className={classes.img} />
          </IconButton>
        </div>
      </div>
      
      <div>
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
    </div>
  );
}
