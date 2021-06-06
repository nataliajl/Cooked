import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox, TextField, List, Collapse, ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';
import { ExpandMore, FavoriteTwoTone, NavigateNext } from '@material-ui/icons';
import { OnlyIngredients, StyledSlider, StyledRating, useStyles } from './FilterStyles';
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
          
          <div class='ingreSwitch' className={classes.row}>
            <div className={classes.font}>
              <Typography className={classes.subtitle} gutterBottom>Only Inserted Ingredients</Typography>
            </div>
              <OnlyIngredients checked={checked} onChange={toggleChecked} />  
            
          </div>

          <div class='cuisineList'>
            <List className={classes.list}>
              <ListItem button onClick={handleClick}>
                <ListItemText className={classes.font}
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
                        <ListItemText className={classes.font} primary={data.type} />
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </List>
          </div>

          <div class='serveSlider'>
              <div class='title'>
                  <Typography className={classes.font} id='discrete-slider-custom' gutterBottom>
                    Serving Rage
                  </Typography>
                </div>

              <div class='subtitle'>
                  <Typography className={classes.subtitle, classes.font}>
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
                <Typography className={classes.font} gutterBottom>Cooking Time</Typography>
              </div>
              <div class='inputContainer' className={classes.row}>
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
                  <Typography className={classes.subtitle, classes.font} >to</Typography>
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
                <Typography className={classes.subtitle, classes.font}>minutes</Typography>
              </div>
            </div>
          </div>

          <div class='startRating'>
              <div class='title'>
                <Typography className={classes.font} component='legend'>Rate</Typography>
              </div>
              <div class='rating'>
                <StyledRating
                  name='customized-icons'
                  defaultValue={1}
                  precision={0.5}
                  icon={<FavoriteTwoTone fontSize='inherit' />}
                  />
              </div>
          </div>
          
          <div class='sendButton'>
            <Button className={classes.font, classes.button}  variant="contained" type="submit">Let's Cook</Button>
          </div>
      </form>
    </div>
  );
}
