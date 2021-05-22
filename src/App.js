import React from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import RecipeScreen from './screens/RecipeScreen/RecipeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen/AddRecipeScreen';

function App() {
  return (
    <div>
      <header className='App-header'>
        <RecipeScreen />
      </header>
    </div>
  );
}

export default App;
