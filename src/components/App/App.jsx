import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Spoonacular from '../Spoonacular';

import Giphy from '../Giphy';
import Header from '../Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route path="/giphy">
            <Giphy />
          </Route>

          <Route path="/spoonacular">
            <Spoonacular />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
