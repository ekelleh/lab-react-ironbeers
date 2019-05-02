import React from 'react';
import Home from "./components/Home";
import BeerList from './components/BeerList'
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

import { Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeerList} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>

    </div>
  );
}

export default App;
