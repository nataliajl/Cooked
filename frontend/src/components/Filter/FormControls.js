import React from 'react';
import {getRecipes} from './../../services/recipe';
import {getCategories} from './../../services/category';


export const useFormControls = () => {
  const [inputData, setInputData] = React.useState("");
  const handleChange = (input)  => {
    setInputData(input.target.value);
  };

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Onion' },
    { key: 1, label: 'Tomato' },
    { key: 2, label: 'Cucumber' },
  ]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleAddChip= () => {
    let newChipData = [...chipData];
    if (inputData.length != 0) {
      newChipData = [...newChipData, {key: chipData.length, label: inputData}];
    }
    setInputData("");
    setChipData(newChipData);
  };
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const cuisineList = getCategories();
  const cuisineSelected = [];
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleCheck = (data, checked) => {
    if (checked.target.checked){
      cuisineSelected.push(data.type);
    } else{
      let isOnList = cuisineSelected.indexOf(data.type);

      if(isOnList >= 0)
      cuisineSelected.splice(isOnList, 1);
    }
  };

  const [sliderValue, setSliderValue] = React.useState(1);
  const marks = [{value: 1, label: '1'}, {value: 100, label: '100'}];
  const handleSlider = (value) => {
    setSliderValue(value.target.value);
  };

  const [minMinutes, setMinMinutes] = React.useState();
  const [maxMinutes, setMaxMinutes] = React.useState();
  const handleMin = (minutes) => {
    setMinMinutes(minutes.target.value);
  };
  const handleMax = (minutes) => {
    setMaxMinutes(minutes.target.value);
  };

  const [ratingValue, setRatingValue]  = React.useState(1);
  const handleRating = (value) => {
    setRatingValue(value.target.value);
  };


  const filterInput = { 
      ingredients: chipData,


      onlyIngredients: checked,

      
      cuisine: cuisineSelected,


      serving: sliderValue,

      cookingTime: {
        min: minMinutes,
        max: maxMinutes
      },

      rating: ratingValue

    };

  const handleFormSubmit= async () => {
    alert(JSON.stringify(filterInput));
    const resp = getRecipes(`ingredients=${filterInput.ingredients}
                              &isOnlyIngredients=${filterInput.onlyIngredients}
                              &category=${filterInput.cuisine}
                              &servingSize=${filterInput.serving}
                              &min=${filterInput.cookingTime.min}
                              &max=${filterInput.cookingTime.max}
                              &rate=${filterInput.rating}
                              &vegan=false
                              &vegetarian=false`);
          
    // alert(resp);
  };

  return {
    inputData,
    chipData,
    handleChange,
    handleAddChip,
    handleDelete,

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

    handleFormSubmit,
  };
  
}