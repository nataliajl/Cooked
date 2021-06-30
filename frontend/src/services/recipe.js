import api from './api';

export const getRecipes = (filter) => {
    return api.get(`/recipes?${filter}`);
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
    return api.post('/recipes', {
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
    return api.patch(`/recipes/${recipeData.title}`, {
        ...recipeData
    });
};