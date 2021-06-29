import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {colors} from '../../cookedStyles.js';

import {
    Paper,
    Grid,
    Button,
    MenuItem,
    Switch,
    Checkbox,
    FormControlLabel,
    TextField,
    Select,
    InputLabel,
    Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { postRecipe } from '../../services/recipe';

import AddRecipeTabs from './AddRecipeTabs';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const NewAddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [serves, setServes] = useState('');
    const [category, setCategory] = useState('');
    const [vegetarian, setVegetarian] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [glutenfree, setGlutenfree] = useState(false);
    const [lactosefree, setLactosefree] = useState(false);
    const [ingredients, setIngredients] = useState([{ title: "", quantity: "" }]);
    const [steps, setSteps] = useState([]);
    const [privateSwitch, setPrivateSwitch] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let recipeData = { title, description, cookTime, serves, category, vegetarian, 
            vegan, glutenfree, ingredients, steps, lactosefree, privateSwitch };

        postRecipe({ ...recipeData });

        setOpenAlert(true);
        clearForm();
    };

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setCookTime('');
        setServes('');
        setCategory('');
        setVegetarian(false);
        setVegan(false);
        setGlutenfree(false);
        setLactosefree(false);
        setIngredients([{ title: "", quantity: "" }]);
        setSteps([]);
        setPrivateSwitch(false);
    };

    return (
        <ThemeProvider theme={colors}>
            <form onSubmit={handleSubmit}>
                <Paper style={{ padding: 16, boxShadow: 'none' }}>
                    <Grid container justify="center" direction="row" alignItems="flex-start" spacing={10}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                name="title"
                                type="text"
                                onInput={(e) => setTitle(e.target.value)}
                                value={title}
                                label="Title"
                                helperText="i.e. Caesar Salad"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                required
                                name="description"
                                type="text"
                                onInput={(e) => setDescription(e.target.value)}
                                value={description}
                                label="Description"
                                placeholder="Tell us a little about your recipe..."
                                rowsMax={6}
                                rows={6}
                                margin="normal"
                                multiline
                            />
                            <InputLabel id="cuisine-select">Cuisine</InputLabel>
                            <Select
                                fullWidth
                                required
                                id="cuisine-select"
                                name="category"
                                onChange={(e) => setCategory(e.target.value)}
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
                            </Select>
                            <Grid container spacing={10} justify="space-between">
                                <Grid item xs={5}>
                                    <TextField
                                        fullWidth
                                        required
                                        name="cook-time"
                                        type="number"
                                        onInput={(e) => setCookTime(e.target.value)}
                                        value={cookTime}
                                        label="Cooking Time (minutes)"
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        fullWidth
                                        required
                                        name="serves"
                                        type="number"
                                        onInput={(e) => setServes(e.target.value)}
                                        value={serves}
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
                                                checked={vegetarian}
                                                onChange={(e) => setVegetarian(e.target.checked)}
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
                                                checked={vegan}
                                                onChange={(e) => {
                                                    setVegan(e.target.checked);
                                                    setVegetarian(e.target.checked);
                                                    setLactosefree(e.target.checked);
                                                }}
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
                                                checked={glutenfree}
                                                onChange={(e) => setGlutenfree(e.target.checked)}
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
                                                checked={lactosefree}
                                                onChange={(e) => setLactosefree(e.target.checked)}
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
                                                onChange={(e) => setPrivateSwitch(e.target.checked)}
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
                                    >
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
            <Snackbar open={openAlert} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity="success">
                    Recipe created!
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}

export default NewAddRecipeForm;