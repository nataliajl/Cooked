import React, {useContext} from 'react';

import '@fontsource/lato';
import Navbar from '../../components/Navbar/Navbar';
import './RecipeScreen.css';
import ItemCircle from '../../components/ItemCircle/ItemCircle'
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
import ShareDial from '../../components/RecipeInfo/ShareDial/ShareDial'
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import {AuthContext} from '../../context/AuthContext';
import Rating from '@material-ui/lab/Rating';
import { useHistory } from "react-router-dom";

const RecipeScreen = () => {
    const {isUserLoggedIn} = useContext(AuthContext);
    const history = useHistory();
    const { state } = history.location;

    const captalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const data = {
      title: captalize(state.recipe.title),
      imageSource: 'https://industryeats.com/wp-content/uploads/2017/07/cucumber-asparagus-salad.jpg',
      description: captalize(state.recipe.description),
      portionSize: state.recipe.servingSize,
      time: state.recipe.cookingTime,
      ingredients: state.ingredients.map((ingredient) => {return ingredient.amount +' '+ ingredient.title}),
      rating: 4.5,
      steps: state.steps.map((step) => step.text),
      vegetarian: state.recipe.vegetarian,
      vegan: state.recipe.vegan,
      glutenFree: state.recipe.glutenFree,
      lactoseFree: state.recipe.lactoseFree,
  } 
  
    const StepItem = ({number, text}) => {
        return (
            <div className="stepitem">
                <ItemCircle number={number}/>
                <p className="itemtext">{text}</p>
            </div>            
        );
    }

    const Square = () => {
        return (
            <div className="outer">            
                <div className="square"/>
            </div>
        );
    }
    const IngredientItem = ({text}) => {
        return (
            <div className="ingredientitem">
                <Square/>
                <span className="itemtext">{text}</span>
            </div>            
        );
  
    }

    function handleFavourite(){
        // todo
        return
    }

    function handleRating(){
        // todo
        return
    }

    return (
      <div>
        <Navbar />
        {isUserLoggedIn() && (
          <div className="user-actions">
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  onClick={handleFavourite}
                />
              }
              label="Add recipe to favourites"
            />
            <div className="rating">
              <Rating defaultValue={0.5} precision={0.5} />
              <Button onClick={handleRating}>Rate this recipe</Button>
            </div>
          </div>
        )}

        <div className="outer-container">
          <div className="details-container">
            <RecipeInfo
              title={data.title}
              description={data.description}
              imageSource={data.imageSource}
              time={data.time}
              portionSize={data.portionSize}
              rating={data.rating}
              diet={[
                {
                  type: "vegetarian",
                  value: data.vegetarian,
                },
                {
                  type: "vegan",
                  value: data.vegan,
                },
                {
                  type: "glutenFree",
                  value: data.glutenFree,
                },
                {
                  type: "lactoseFree",
                  value: data.lactoseFree,
                },
              ]}
            />
          </div>
          
          <ShareDial data={data} />
          <div className="right-container">
            <p className="section-text">Ingredients</p>
            <div>
              <div>
                {data.ingredients.map((ingredient) => (
                  <IngredientItem text={ingredient}/>
                ))}
              </div>
            </div>
            <p className="section-text">Steps</p>
            <p>
              {data.steps.map((text, index) => (
                <StepItem number={index + 1} text={text} />
              ))}
            </p>
          </div>
        </div>
      </div>
    );
};

export default RecipeScreen;
