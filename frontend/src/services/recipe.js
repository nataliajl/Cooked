import { BASE_URL } from './base';
import axios from 'axios';

export const getRecipes = () => {
    return axios.get(`${BASE_URL}/recipes`);
};

export const postRecipe = ({ 
    title,
    description,
    category,
    cookTime,
    serves,
    vegetarian,
    vegan,
    lactosefree,
    glutenfree,
    ingredients,
    privateSwitch,
    steps
 }) => {
    return axios.post(`${BASE_URL}/recipes`, {
        title: title,
        description: description,
        category: category,
        cookTime: cookTime,
        serves: serves,
        vegetarian: vegetarian,
        vegan: vegan,
        lactosefree: lactosefree,
        glutenfree: glutenfree,
        ingredients: ingredients,
        private: privateSwitch,
        steps: steps
    });
};

export const patchRecipe = ({
    recipeData
}) => {
    return axios.patch(`${BASE_URL}/recipes/${recipeData.title}`, {
        ...recipeData
    });
};