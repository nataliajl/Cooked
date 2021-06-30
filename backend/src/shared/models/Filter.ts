export default interface Filter {
    ingredients: string;
    isOnlyIngredient: string;
    
    category: string;
    servingSize: string;
    rate: string;

    restriction: {
        vegetarian: string;
        vegan: string;
    };

    cookingTime: {
        min: string;
        max: string;
    };

}
