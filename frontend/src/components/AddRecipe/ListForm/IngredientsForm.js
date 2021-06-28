import React from 'react';

import { Grid, IconButton, TextField } from '@material-ui/core';
import { AddCircle, RemoveCircleOutline } from '@material-ui/icons';

import ItemCircle from '../../ItemCircle/ItemCircle';

import './style.css';


const IngredientsForm = ({ ingredients, setIngredients, values }) => {
    
    const addIngredient = () => {
        setIngredients([...ingredients, {}]);
    }

    const removeIngredient = (index, formValues) => {
        ingredients.splice(index, 1);
        setIngredients([...ingredients]);
        formValues['ingredients'] = ingredients;
    }

    const handleIngredientChange = (event, index, formValues) => {
        ingredients[index].title = event.target.value;
        setIngredients([...ingredients]);
        formValues['ingredients'] = ingredients;
    }

    const handleQuantityChange = (event, index, formValues) => {
        ingredients[index].quantity = event.target.value;
        setIngredients([...ingredients]);
        formValues['ingredients'] = ingredients;
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
                                    onChange={(e) => handleQuantityChange(e, i, values)}
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
                                    onChange={(e) => handleIngredientChange(e, i, values)}
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
                                    onClick={(e) => removeIngredient(i, values)}
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