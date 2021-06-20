import React from 'react';
import Typography from '@material-ui/core/Typography';
import {useFormControls} from './FormControls';
import { Checkbox, TextField, List, Collapse, ListItem, ListItemIcon, ListItemText, Button, Container } from '@material-ui/core';
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
    <Container maxWidth="sm">
      <form onSubmit={handleFormSubmit}>
        <div class='insertIngredients' className={classes.row3}>
            <Tag />
          </div>
          
        <div class='ingreSwitch' className={classes.row}>
            <div>
              <Typography className={classes.font} gutterBottom>Only Inserted Ingredients</Typography>
            </div>
            <OnlyIngredients checked={checked} onChange={toggleChecked} />  
            
          </div>
        
        <div class='cuisineList'>
          <div>
            <List className={classes.list}>
              <ListItem button onClick={handleClick}>
                <ListItemText
                  primary='Cuisine'
                  secondary='Choose by cooking style'
                  classes={{primary:classes.font}}
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
                        <ListItemText primary={data.type} classes={{primary:classes.font}}/>
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </List>
          </div>
        </div>

        <div class='serveSlider' className={classes.row}>
          <div>
              <div class='title'>
                  <Typography className={classes.font} id='discrete-slider-custom' gutterBottom>
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
                    defaultValue={sliderValue}
                    aria-labelledby='discrete-slider-custom'
                    step={1}
                    valueLabelDisplay='auto'
                    min={1}
                    max={100}
                    marks={marks}
                    onChange={handleSlider}
                  />
                </div>
          </div>
        </div>

        <div class='cookingContainer' className={classes.row}>
          <div>
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
                    onChange={handleMin}
                  />
                </div>
                <div class='subtitle'>
                  <Typography className={classes.subSpace} >to</Typography>
                </div>
                <div class='input'>
                  <TextField
                    id='outlined-search'
                    type='search'
                    placeholder='Max'
                    variant='outlined'
                    type='number'
                    onChange={handleMax}
                  />
                </div>
              <div>
                <Typography className={classes.subSpace}>minutes</Typography>
              </div>
            </div>
          </div>
        </div>

        <div class='startRating' className={classes.row1}>
          <div>
            <div class='title'>
              <Typography className={classes.font} component='legend'>Rate</Typography>
            </div>
            <div class='rating'>
              <StyledRating
                name='customized-icons'
                defaultValue={ratingValue}
                precision={0.5}
                icon={<FavoriteTwoTone fontSize='inherit' />}
                onChange={handleRating}
                />
            </div>
          </div>
        </div>
          
        <div class='sendButton' className={classes.row2}>
            <Button className={classes.button}  variant="contained" type="submit">Let's Cook</Button>
        </div>
      </form>
    </Container>
  );
}
