import React from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Filter from './components/Filter/Filter';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen/AddRecipeScreen';

function App() {
  return (
    <div>
      <header className='App-header'>
        <Filter />
      </header>
    </div>
  );
}

export default App;
