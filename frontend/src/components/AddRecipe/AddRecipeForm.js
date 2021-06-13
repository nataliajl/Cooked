import React from 'react';

import { Form, Field } from 'react-final-form';
import { TextField, Select } from 'final-form-material-ui';
import {
    Paper,
    Grid,
    Button,
    MenuItem,
    Switch,
    Checkbox,
    FormControlLabel
} from '@material-ui/core';

import AddRecipeTabs from './AddRecipeTabs';


const onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    }
    if (!values.description) {
        errors.description = 'Required';
    }
    if (!values.cuisine) {
        errors.cuisine = 'Required';
    }
    if (!values['cook-time']) {
        errors['cook-time'] = 'Required';
    }
    if (!values.serves) {
        errors.serves = 'Required';
    }

    return errors;
};

const AddRecipeForm = () => {
    const [recipeImage, setRecipeImage] = React.useState();
    const [privateSwitch, setPrivateSwitch] = React.useState(false);
    const [vegetarianCheck, setVegetarianCheck] = React.useState(false);
    const [veganCheck, setVeganCheck] = React.useState(false);
    const [glutenFreeCheck, setGlutenFreeCheck] = React.useState(false);
    const [lactoseFreeCheck, setLactoseFreeCheck] = React.useState(false);
    const [ingredients, setIngredients] = React.useState([]);
    const [steps, setSteps] = React.useState([]);

    const handleRecipeImage = (event, formValues) => {
        setRecipeImage(event.target.files[0]);
        formValues['recipe-image'] = event.target.files[0];
    };

    const handlePrivateSwitch = (event, formValues) => {
        setPrivateSwitch(event.target.checked);
        formValues['private'] = event.target.checked;
    };

    const handleVegetarianCheck = (event, formValues) => {
        setVegetarianCheck(event.target.checked);
        formValues['vegetarian'] = event.target.checked;
    };

    const handleVeganCheck = (event, formValues) => {
        setVeganCheck(event.target.checked);
        setVegetarianCheck(event.target.checked);
        setLactoseFreeCheck(event.target.checked);
        formValues['vegan'] = event.target.checked;
        formValues['vegetarian'] = event.target.checked;
        formValues['lactosefree'] = event.target.checked;
    };

    const handleGlutenFreeCheck = (event, formValues) => {
        setGlutenFreeCheck(event.target.checked);
        formValues['glutenfree'] = event.target.checked;
    };

    const handleLactoseFreeCheck = (event, formValues) => {
        setLactoseFreeCheck(event.target.checked);
        formValues['lactosefree'] = event.target.checked;
    };


    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Paper style={{ padding: 16, boxShadow: 'none' }}>
                        <Grid container justify="center" direction="row" alignItems="flex-start" spacing={10}>
                            <Grid item xs={6}>
                                <input
                                    accept="image/*"
                                    id="recipe-button-file"
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => handleRecipeImage (e, values)}
                                    required
                                />
                                <label htmlFor="recipe-button-file">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload recipe photo
                                    </Button>
                                </label>
                                <Field
                                    fullWidth
                                    required
                                    name="title"
                                    component={TextField}
                                    type="text"
                                    label="Title"
                                    helperText="i.e. Caesar Salad"
                                    margin="normal"
                                />
                                <Field
                                    fullWidth
                                    required
                                    name="description"
                                    component={TextField}
                                    type="text"
                                    label="Description"
                                    placeholder="Tell us a little about your recipe..."
                                    rowsMax={6}
                                    rows={6}
                                    margin="normal"
                                    multiline
                                />
                                <Field
                                    fullWidth
                                    required
                                    id="cuisine-select"
                                    name="cuisine"
                                    component={Select}
                                    label="Cuisine"
                                    formControlProps={{ fullWidth: true }}
                                    margin="normal"
                                >
                                    <MenuItem value="american">American</MenuItem>
                                    <MenuItem value="chinese">Chinese</MenuItem>
                                    <MenuItem value="french">French</MenuItem>
                                    <MenuItem value="indian">Indian</MenuItem>
                                    <MenuItem value="italian">Italian</MenuItem>
                                    <MenuItem value="japanese">Japanese</MenuItem>
                                    <MenuItem value="mexican">Mexican</MenuItem>
                                    <MenuItem value="spanish">Spanish</MenuItem>
                                    <MenuItem value="thai">Thai</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Field>
                                <Grid container spacing={10} justify="space-between">
                                    <Grid item xs={5}>
                                        <Field
                                            fullWidth
                                            required
                                            name="cook-time"
                                            component={TextField}
                                            type="number"
                                            label="Cooking Time (minutes)"
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Field
                                            fullWidth
                                            required
                                            name="serves"
                                            component={TextField}
                                            type="number"
                                            label="Serves (people)"
                                            margin="normal"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={10} justify="space-between">
                                    <Grid item xs={5}>
                                        <FormControlLabel
                                            label="Vegetarian"
                                            control={
                                                <Checkbox
                                                    checked={vegetarianCheck}
                                                    onChange={(e) => handleVegetarianCheck(e, values)}
                                                    name="vegetarian"
                                                    color="primary"
                                                />
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <FormControlLabel
                                            label="Vegan"
                                            control={
                                                <Checkbox
                                                    checked={veganCheck}
                                                    onChange={(e) => handleVeganCheck(e, values)}
                                                    name="vegan"
                                                    color="primary"
                                                />
                                            }
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={10} justify="space-between">
                                    <Grid item xs={5}>
                                        <FormControlLabel
                                            label="Gluten free"
                                            control={
                                                <Checkbox
                                                    checked={glutenFreeCheck}
                                                    onChange={(e) => handleGlutenFreeCheck(e, values)}
                                                    name="glutenfree"
                                                    color="primary"
                                                />
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <FormControlLabel
                                            label="Lactose free"
                                            control={
                                                <Checkbox
                                                    checked={lactoseFreeCheck}
                                                    onChange={(e) => handleLactoseFreeCheck(e, values)}
                                                    name="lactosefree"
                                                    color="primary"
                                                />
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <AddRecipeTabs 
                                    values={values} 
                                    ingredients={ingredients} 
                                    setIngredients={setIngredients}
                                    steps={steps} 
                                    setSteps={setSteps}
                                />

                                <Grid container spacing={5} justify="center" style={{ marginTop: 50 }}>
                                    <Grid item xs={3} style={{ marginRight: 30 }}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={privateSwitch}
                                                    onChange={(e) => handlePrivateSwitch(e, values)}
                                                    name="private"
                                                    color="secondary"
                                                />
                                            }
                                            label="Private"
                                            labelPlacement="start"
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button
                                            variant="contained"
                                            color = "primary"
                                            type="submit"
                                            disabled={submitting}
                                        >
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
            )} 
        />
    );
}

export default AddRecipeForm;