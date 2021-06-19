import React from 'react';
import { useStyles, StyledInputBase } from './TagStyles';
import { AddCircle } from '@material-ui/icons';
import {IconButton, Grid, Chip} from '@material-ui/core';

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
    <div>
      <Grid container spacing={2} className={classes.align}>
        <Grid item xs={10}>
          <StyledInputBase
          placeholder='Please enter your ingredients'
          inputProps={{ 'aria-label': 'naked' }}
          value={inputData}
          onChange={event => handleChange(event)}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={handleSubmit} disabled={inputData.length === 0}>
            <AddCircle className={classes.add_icon}/>
          </IconButton>
        </Grid>
      </Grid>
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
