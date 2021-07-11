import api from './api';

export const filteredRecipes = (filter) => {
    return api.post('/recipes/search', {
        ingredients: filter.ingredients,
        isOnlyIngredients: filter.isOnlyIngredients,
        categories: filter.categories,
        servingSize: filter.servingSize,
        rate: filter.rate,
        restriction: {
            vegetarian: filter.vegetarian,
            vegan: filter.vegan,
        },
        cookingTime: {
            min: filter.min,
            max: filter.max
        }  
    });
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