import React from 'react';
import AddRecipeForm from '../../components/AddRecipe/AddRecipeForm';
import Navbar from '../../components/Navbar/Navbar';

const AddRecipeScreen = () => {
    return (
        <div style={{ padding: 'auto 80px 0 80px', margin: 'auto', width: '-webkit-fill-available' }}>
            <Navbar/>
            <AddRecipeForm />
        </div>
    );
}

export default AddRecipeScreen;