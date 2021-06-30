import React from 'react';

import { Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Landing from './screens/Landing/Landing';
import RecipeScreen from './screens/RecipeScreen/RecipeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen/AddRecipeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
  return (
    <AuthProvider>
      <Router>
          <>
            <Route exact path="/" component={Landing} />
            <Route exact path="/recipe" component={RecipeScreen} />
            <Route exact path="/keeparecipe" component={AddRecipeScreen} />
            <Route exact path="/login" component={LoginScreen} />
          </>
      </Router>
    </AuthProvider>
  );
}

export default App;
