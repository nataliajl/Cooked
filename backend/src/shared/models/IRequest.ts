import RequestIngredients from "./RequestIngredients";

export default interface IRequest {
    title: string;
    description: string;
    category: string;
    cookTime: number;
    serves: number;
    vegetarian: boolean;
    vegan: boolean;
    lactosefree: boolean;
    glutenfree: boolean;
    ingredients: RequestIngredients[];
    private: boolean;
    steps: string[];
}