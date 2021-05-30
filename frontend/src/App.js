import React from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import RecipeScreen from './screens/RecipeScreen/RecipeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen/AddRecipeScreen';
import { Home } from '@material-ui/icons';

function App() {
  return (
    <div>
        <header className='App-header'>
            <Navbar />
            <AddRecipeScreen />
        </header>
    </div>
  );
}

export default App;
