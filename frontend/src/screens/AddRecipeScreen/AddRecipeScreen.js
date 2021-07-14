import React from 'react';
import AddRecipeForm from '../../components/AddRecipe/AddRecipeForm';
import Navbar from '../../components/Navbar/Navbar';

const AddRecipeScreen = () => {
    return (
        <div>
            <Navbar/>
            <AddRecipeForm />
        </div>
    );
}

export default AddRecipeScreen;