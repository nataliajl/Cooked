import React from 'react';
import { useStyles } from './TagStyles';
import { AddCircle } from '@material-ui/icons';
import {IconButton, Chip, InputBase} from '@material-ui/core';

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
    if (newChipData.indexOf(inputData) === -1) {
      newChipData = [...newChipData, {key: chipData.length, label: inputData}];
    }
    setInputData("");
    setChipData(newChipData);
  };

  return ( 
    <div className={classes.root}>
      <div className={classes.inputContainer}>
          <div className={classes.input}>
            <InputBase
            placeholder='Please enter your ingredients'
            value={inputData}
            onChange={event => handleChange(event)}
            
            />
          </div>
          <div class='addButton'>
            <IconButton onClick={handleSubmit}>
              <AddCircle className={classes.add_icon}/>
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
              />
            </li>
          ))}
      </div>
    </div>
  );
}
