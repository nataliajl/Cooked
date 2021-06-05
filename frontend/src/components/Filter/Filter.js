import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox, TextField, List, Collapse, ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { ExpandMore, StarBorder, NavigateNext } from '@material-ui/icons';
import { OnlyIngredients, StyledSlider , useStyles } from './FilterStyles';
import Tag from './Tags/Tag';

export default function Filter() {
  const classes = useStyles(); 

  const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState(false);

  const [cuisineList, setCuisineList] = React.useState([
    {type: 'Mexican'}, 
    {type: 'Italian'}
  ]);

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

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSubmit= () => {
  };

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit}>
          <div class='insertIngredients'>
            <Tag />
          </div>
          
          <div class='ingreSwitch'>
            <FormControlLabel
              control={
                <OnlyIngredients checked={checked} onChange={toggleChecked} />
              }
              label='Only inserted ingredients'
              labelPlacement='start'
            />
          </div>

          <div class='cuisineList'>
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
                    {cuisineList.map((data) => (
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <Checkbox edge='start' disableRipple />
                        </ListItemIcon>
                        <ListItemText primary={data.type} />
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </List>
          </div>

          <div class='serveSlider'>
              <div class='title'>
                  <Typography id='discrete-slider-custom' gutterBottom>
                    Serving Rage
                  </Typography>
                </div>

              <div class='subtitle'>
                  <Typography className={classes.subtitle}>
                    How many people do you want to serve?
                  </Typography>
                </div>
              
              <div class='slider'>
                  <StyledSlider 
                    defaultValue={1}
                    aria-labelledby='discrete-slider-custom'
                    step={1}
                    valueLabelDisplay='auto'
                    min={1}
                    max={100}
                    marks={marks}
                  />
                </div>
          </div>

          <div class='cookingContainer'>
              <div class='title'>
                <Typography gutterBottom>Cooking Time</Typography>
              </div>
              <div class='inputContainer'>
                <div class='input'>
                  <TextField
                    id='outlined-search'
                    type='search'
                    placeholder='Min'
                    variant='outlined'
                    type='number'
                  />
                </div>
                <div class='subtitle'>
                  <Typography className={classes.subtitle} >to</Typography>
                </div>
                <div class='input'>
                  <TextField
                    id='outlined-search'
                    type='search'
                    placeholder='Max'
                    variant='outlined'
                    type='number'
                  />
                </div>
              <div>
                <Typography className={classes.subtitle}>minutes</Typography>
              </div>
          </div>
          </div>

          <div class='startRating'>
              <div class='title'>
                <Typography component='legend'>Rate</Typography>
              </div>
              <div class='rating'>
                <Rating
                  name='customized-empty'
                  defaultValue={1}
                  precision={0.5}
                  emptyIcon={<StarBorder fontSize='inherit' />}
                  />
              </div>
          </div>
          
          <div class='sendButton'>
            <Button variant="contained" type="submit">Let's Cook</Button>
          </div>
      </form>
    </div>
  );
}
