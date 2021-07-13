import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import RecipeCard from '../../components/Card/RecipeCard';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import {useStyles } from './SearchScreenStyle';

const SearchScreen = () => {
    const classes = useStyles();
    const history = useHistory();
    const { state } = history.location;
    return ( 
      <div>
        <Navbar />
        <div className={classes.text}>
          <Typography variant='h3' component='slogan'>
            Take a look on theses recipes
          </Typography>
          <Typography variant='h5' component='slogan'>
            Founded {state.length} recipes
          </Typography>
        </div>
        <RecipeCard content={state}/>
      </div>
    );
  };
  
  export default SearchScreen;