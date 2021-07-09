export default interface Filter {
    ingredients: string[];
    isOnlyIngredient: string;
    categories: string[];
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
