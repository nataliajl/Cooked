import React from 'react';

import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import RecipeScreen from './screens/RecipeScreen/RecipeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen/AddRecipeScreen';
import { Home } from '@material-ui/icons';

function App() {
  return (
    <AuthProvider>
      <Router>
          <>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/recipe" component={RecipeScreen} />
            <Route exact path="/keeparecipe" component={AddRecipeScreen} />
          </>
      </Router>
    </AuthProvider>

  );
}

export default App;
