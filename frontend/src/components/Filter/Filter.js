import React from 'react';
import Typography from '@material-ui/core/Typography';
import {useFormControls} from './FormControls';
import { Checkbox, TextField, List, Collapse, ListItem, ListItemIcon, ListItemText, Button} from '@material-ui/core';
import { ExpandMore, FavoriteTwoTone, NavigateNext } from '@material-ui/icons';
import { OnlyIngredients, StyledSlider, StyledRating, useStyles } from './FilterStyles';
import Tag from './Tags/Tag';

export default function Filter() {
  const classes = useStyles(); 
  
  const {      
    checked,
    toggleChecked,
      
    open,
    cuisineList,
    handleClick,
    handleCheck,
      

    marks,
    sliderValue,
    handleSlider,

    handleMax,
    handleMin,

    ratingValue,
    handleRating,

    handleFormSubmit
  } = useFormControls();

  return (
      <form className={classes.root} onSubmit={handleFormSubmit}>
        <Tag />
        <div class='ingreSwitch' className={classes.row}>
            <Typography className={classes.font} gutterBottom>Only Inserted Ingredients</Typography>
            <OnlyIngredients checked={checked} onChange={toggleChecked} />  
            
          </div>
        
        <div class='cuisineList'>
            <List className={classes.list}>
              <ListItem className={classes.list}button onClick={handleClick}>
                <ListItemText
                  primary='Cuisine'
                  secondary='Choose by cooking style'
                  classes={{primary: classes.font, secondary:classes.subtitle}}
                  
                />
                {open ? <ExpandMore /> : <NavigateNext />}
              </ListItem>

              <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div'  disablePadding>                 
                    {cuisineList.map((data) => (
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <Checkbox edge='start' onChange={e => {handleCheck(data, e)}} disableRipple/>
                        </ListItemIcon>
                        <ListItemText primary={data} classes={{primary:classes.font}}/>
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </List>
        </div>

        <div class='serveSlider'>
          <div class='text'>
            <Typography className={classes.font} id='discrete-slider-custom' gutterBottom compnent='title'>
              Serving Rage
            </Typography>
            <Typography className={classes.subtitle}>
              How many people do you want to serve?
            </Typography>
          </div>
          <div class='slider'>
            <StyledSlider 
              defaultValue={sliderValue}
              aria-labelledby='discrete-slider-custom'
              step={1}
              valueLabelDisplay='auto'
              marks={marks}
              onChange={handleSlider}
            />
          </div>
        </div>

        <div class='cookingContainer'>
          <Typography className={classes.font} gutterBottom>Cooking Time</Typography>

          <div class='inputContainer' className={classes.row}>
            <TextField
              id='outlined-search'
              placeholder='Min'
              variant='outlined'
              type='number'
              onChange={handleMin}
            />
          
            <div className={classes.margin}>
              <Typography className={classes.subtitle}>to</Typography>
            </div>
        
            <TextField
              id='outlined-search'
              placeholder='Max'
              variant='outlined'
              type='number'
              onChange={handleMax}
            />
            
            <div className={classes.margin}>
              <Typography className={classes.subtitle}>minutes</Typography>
            </div>
          </div>
        </div>

        <div class='startRating'>
          <Typography className={classes.font} component='section'>Rate</Typography>
          <StyledRating
            name='customized-icons'
            defaultValue={ratingValue}
            precision={0.5}
            icon={<FavoriteTwoTone fontSize='inherit' />}
            onChange={handleRating}
            size="large"
            />
        </div>
          
        <div className={classes.button}>
          <div className={classes.font}>
            <Button variant="contained" type="submit">
              Let's Cook
            </Button>
          </div>
        </div>

      </form>

  );
}
