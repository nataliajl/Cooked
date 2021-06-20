import React from 'react';
// const initialFormValues = {
//     fullName: "",
//     email: "",
//     message:"",
//     formSubmitted: false,
//     success: false
//   }
  
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

  const cuisineList = [{type: 'Mexican'}, {type: 'Italian'}];
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


  const inputFieldsValues = { 
      ingredients: {
        add: chipData
      },

      onlyIngredients: {
        value: checked
      },
      
      cuisine: {
        selected: cuisineSelected
      },

      serving: {
        people: sliderValue
      },

      cookingTime: {
        min: minMinutes,
        max: maxMinutes
      },

      rating: {
        average: ratingValue
      }
    };

  const handleFormSubmit= async () => {
    alert(JSON.stringify(inputFieldsValues));
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