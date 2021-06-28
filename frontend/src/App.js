import React from 'react';

import Filter from './components/Filter/Filter';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Landing from './screens/Landing/Landing';
import RecipeScreen from './screens/RecipeScreen/RecipeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen/AddRecipeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { Home } from '@material-ui/icons';

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
