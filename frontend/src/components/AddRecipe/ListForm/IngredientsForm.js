import React from 'react';

import { Grid, IconButton, TextField } from '@material-ui/core';
import { AddCircle, RemoveCircleOutline } from '@material-ui/icons';

import ItemCircle from '../../ItemCircle/ItemCircle';

import './style.css';


const IngredientsForm = ({ ingredients, setIngredients }) => {
    
    const addIngredient = () => {
        setIngredients([...ingredients, {}]);
    }

    const removeIngredient = (index) => {
        ingredients.splice(index, 1);
        setIngredients([...ingredients]);
    }

    const handleIngredientChange = (event, index) => {
        ingredients[index].title = event.target.value;
        setIngredients([...ingredients]);
    }

    const handleQuantityChange = (event, index) => {
        ingredients[index].quantity = event.target.value;
        setIngredients([...ingredients]);
    }

    return (
        <>
            <div className="listForm__container">
                { ingredients.map((ingredient, i) => {
                    return (
                        <Grid key={i} container justify="space-between" alignItems="center">
                            <Grid item xs={1}>
                                <ItemCircle number={i + 1} />
                            </Grid>
                            <Grid item xs={1}>
                                <TextField
                                    fullWidth
                                    required
                                    type="number"
                                    onChange={(e) => handleQuantityChange(e, i)}
                                    value={ingredient.quantity}
                                    helperText="Quantity"
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    fullWidth
                                    required
                                    type="text"
                                    onChange={(e) => handleIngredientChange(e, i)}
                                    value={ingredient.title}
                                    helperText="i.e. Caesar Salad"
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton
                                    color="secondary" 
                                    aria-label="remove ingredient" 
                                    component="span"
                                    onClick={(e) => removeIngredient(i)}
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
                    aria-label="add ingredient" 
                    component="div"
                    onClick={addIngredient}
                >
                    <AddCircle fontSize="large" />
                </IconButton>
            </Grid>
        </>
    );
}

export default IngredientsForm;