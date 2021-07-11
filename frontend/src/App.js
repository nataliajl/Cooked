import React from 'react';

import { Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import RecipeScreen from './screens/RecipeScreen/RecipeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen/AddRecipeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import SearchScreen from './screens/SearchScreen/SearchScreen';

function App() {
  return (
    <AuthProvider>
      <Router>
          <>
            <Route exact path="/" component={LandingScreen} />
            <Route exact path="/recipe" component={RecipeScreen} />
            <Route exact path="/keeparecipe" component={AddRecipeScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/search" component={SearchScreen} />
          </>
      </Router>
    </AuthProvider>
  );
}

export default App;
