import React from 'react';

import { Grid, IconButton, TextField } from '@material-ui/core';
import { AddCircle, RemoveCircleOutline } from '@material-ui/icons';

import './style.css';


const StepsForm = ({ steps, setSteps, values }) => {
    
    const addSteps = () => {
        setSteps([...steps, ""]);
    }

    const removeSteps = (index, formValues) => {
        steps.splice(index, 1);
        setSteps([...steps]);
        formValues['steps'] = steps;
    }

    const handleStepsChange = (event, index, formValues) => {
        steps[index] = event.target.value;
        setSteps([...steps]);
        formValues['steps'] = steps;
    }

    return (
        <>
            <div className="listForm__container">
                { steps.map((step, i) => {
                    return (
                        <Grid key={i} container justify="flex-start" alignItems="center">
                            <Grid item xs={1}>
                                <span>{i + 1}</span>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    required
                                    type="text"
                                    onChange={(e) => handleStepsChange(e, i, values)}
                                    value={step}
                                    helperText="i.e. Put the lettuce in a bowl with water"
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton
                                    color="secondary" 
                                    aria-label="remove step" 
                                    component="span"
                                    onClick={(e) => removeSteps(i, values)}
                                >
                                    <RemoveCircleOutline />
                                </IconButton>
                            </Grid>
                        </Grid>
                    );
                })}
            </div>
            <Grid container spacing={10} className="addInput__button">
                <IconButton 
                    color="primary" 
                    aria-label="add step" 
                    component="div"
                    onClick={addSteps}
                >
                    <AddCircle fontSize="large" />
                </IconButton>
            </Grid>
        </>
    );
}

export default StepsForm;