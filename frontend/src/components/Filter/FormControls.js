import React from 'react';
import {getCategories} from './../../services/category';
import {filteredRecipes} from './../../services/recipe';
import { useHistory } from "react-router-dom";

export const useFormControls = () => {
  const history = useHistory();
  const [inputData, setInputData] = React.useState("");
  const handleChange = (input)  => {
    setInputData(input.target.value);
  };

  const [chipData, setChipData] = React.useState([]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const handleAddChip= () => {
    let newChipData = [...chipData];
    if (inputData.length !== 0)
      newChipData = [...newChipData, {key: newChipData.length, label: inputData}];
 
    setInputData("");
    setChipData(newChipData);
  };

  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const [isVeg, setVeg] = React.useState({vegetarian: false, vegan: false});
  const handleVegetarian = () => {
    setVeg((prev) => !prev.vegetarian);
  };
  const handleVegan = () => {
    setVeg((prev) => !prev.vegan);
  };

  const [inputCategories, setCategories] = React.useState([]);
  const handleCuisine = () => {
    if(inputCategories.length === 0){
      getCategories().then((data) => {
        const categories = data;
        // console.log(categories);
          setCategories(categories);
      });
    }
    return inputCategories;
  };
  const [cuisineSelected, setCuisine] = React.useState([]);
  const handleCheck = (data, checked) => {
    if (checked.target.checked){
      setCuisine((selected) => [...selected, data]);
    } else{
      const unselect = cuisineSelected.filter((value) => value !== data);
      setCuisine(unselect);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  

  const [sliderValue, setSliderValue] = React.useState(1);
  const marks = [{value: 1, label: '1'}, {value: 100, label: '100'}];
  const handleSlider = (value) => {
    setSliderValue(value);
  };

  const [minutes, setMinutes] = React.useState({min: 0, max: 0});

  const handleMin = (minutes) => {
    setMinutes((prev) => {return {min: minutes.target.value, max: prev.max}});
  };
  const handleMax = (minutes) => {
    setMinutes((prev) => {return {min:prev.min, max: minutes.target.value}});
  };

  const [ratingValue, setRatingValue]  = React.useState(1);
  const handleRating = (value) => {
    setRatingValue(value.target.value);
  };

  const handleFormValues = () =>{
    return { 
      ingredients: chipData.map((value) => value.label),
      isOnlyIngredients: checked,
      categories: cuisineSelected.length === 0? inputCategories : cuisineSelected,
      servingSize: sliderValue,
      rate: ratingValue,
      vegetarian: isVeg.vegetarian,
      vegan: isVeg.vegan,
      min: minutes.min,
      max: minutes.max === 0? 1440 : minutes.max
    };
  }


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(chipData.length !== 0){
      const filter = handleFormValues();
      const response =  await filteredRecipes(filter);
      console.log(response);
      return history.push({
        pathname: '/search',
        state: response
      });

    }
    alert('AT LEAST ONE INGREDIENT MUST BE INSERTED');
    
  };

  return {
    inputData,
    chipData,
    handleChange,
    handleAddChip,
    handleDelete,

    checked,
    toggleChecked,

    handleVegetarian,
    handleVegan,
      
    open,
    inputCategories,
    handleCuisine,
    handleClick,
    handleCheck,
      

    marks,
    sliderValue,
    handleSlider,

    handleMax,
    handleMin,

    ratingValue,
    handleRating,

    handleFormValues,
    handleFormSubmit,
  };
  
}