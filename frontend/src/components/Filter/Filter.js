import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
  Checkbox,
  TextField,
  IconButton,
  List,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';

import {
  ExpandMore,
  AddCircle,
  StarBorder,
  NavigateNext,
} from '@material-ui/icons';

import { OnlyIngredients, ServeRage, useStyles } from './FilterStyles';

export default function Filter() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <div class='keywords'>
          <TextField
            id='outlined-search'
            type='search'
            placeholder='Please enter your ingredients'
            variant='outlined'
          />

          <IconButton className={classes.margin}>
            <AddCircle />
          </IconButton>
        </div>

        <div class='swith'>
          <FormControlLabel
            control={
              <OnlyIngredients checked={checked} onChange={toggleChecked} />
            }
            label='Only inserted ingredients'
            labelPlacement='start'
          />
        </div>

        <div class='cuisine'>
          <List className={classes.rot}>
            <ListItem button onClick={handleClick}>
              <ListItemText
                primary='Cuisine'
                secondary='Choose by cooking style'
              />
              {open ? <ExpandMore /> : <NavigateNext />}
            </ListItem>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Checkbox edge='start' disableRipple />
                  </ListItemIcon>
                  <ListItemText primary='Item 1' />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>

        <div class='serve'>
          <Typography id='discrete-slider-custom' gutterBottom>
            Serving Rage
          </Typography>
          <Typography variant='body2'>
            How many people do you want to serve?
          </Typography>
          <ServeRage
            defaultValue={1}
            aria-labelledby='discrete-slider-custom'
            step={1}
            valueLabelDisplay='auto'
            min={1}
            max={100}
            classes={{ color: '#FB4E4B' }}
          />
        </div>

        <div class='cooking'>
          <Typography gutterBottom>Cooking Time</Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                id='outlined-search'
                type='search'
                placeholder='Min'
                variant='outlined'
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant='body2'>to</Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                id='outlined-search'
                type='search'
                placeholder='Max'
                variant='outlined'
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant='body2'>minutes</Typography>
            </Grid>
          </Grid>
        </div>

        <div>
          <Box component='fieldset' mb={3} borderColor='transparent'>
            <Typography component='legend'>Rate</Typography>
            <Rating
              name='customized-empty'
              defaultValue={1}
              precision={0.5}
              emptyIcon={<StarBorder fontSize='inherit' />}
            />
          </Box>
        </div>
      </div>
    </form>
  );
}
