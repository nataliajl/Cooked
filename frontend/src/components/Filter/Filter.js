import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox, TextField, List, Collapse, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { ExpandMore, StarBorder, NavigateNext } from '@material-ui/icons';
import { OnlyIngredients, StyledSlider , useStyles } from './FilterStyles';
import Tag from './Tags/Tag';

export default function Filter() {
  const classes = useStyles(); 
  const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 99,
      label: '100',
    },
  ];
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

        <div class='pills'>
          <Tag/>
        </div>
        
        <div class='ingredients'>
          <FormControlLabel
            control={
              <OnlyIngredients checked={checked} onChange={toggleChecked} />
            }
            label='Only inserted ingredients'
            labelPlacement='start'
          />
        </div>

        <div class='cuisine'>
          <List className={classes.list}>
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
                  <ListItemText primary='Mexican' />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>

        <div class='serve'>
            <Grid container spacing={0} className={classes.align}>
              <Grid item xs={12}>
                <Typography id='discrete-slider-custom' gutterBottom>
                  Serving Rage
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.subtitle}>
                  How many people do you want to serve?
                </Typography>
              </Grid>
            
              <Grid item xs={12} >
                <StyledSlider 
                  defaultValue={1}
                  aria-labelledby='discrete-slider-custom'
                  step={1}
                  valueLabelDisplay='auto'
                  min={1}
                  max={100}
                  marks={marks}
                />
              </Grid>
            </Grid>
        </div>

        <div class='cooking'>
          
          <Grid container spacing={2} className={classes.align}>
            <Grid item xs={12}>
              <Typography gutterBottom>Cooking Time</Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                id='outlined-search'
                type='search'
                placeholder='Min'
                variant='outlined'
              />
            </Grid>
            <Grid item xs={1} container alignContent='center'>
              <Typography className={classes.subtitle} >to</Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                id='outlined-search'
                type='search'
                placeholder='Max'
                variant='outlined'
              />
            </Grid>
            <Grid item xs={3} container alignContent='center'>
              <Typography className={classes.subtitle}>minutes</Typography>
            </Grid>
          </Grid>
        </div>

        <div class='rate'>
          <Grid container spacing={2} className={classes.align}>
            <Grid item xs={12}>
                  <Typography component='legend'>Rate</Typography>
                  <Rating
                    name='customized-empty'
                    defaultValue={1}
                    precision={0.5}
                    emptyIcon={<StarBorder fontSize='inherit' />}
                  />
            </Grid>
          </Grid>
        </div>

    </form>
  );
}
