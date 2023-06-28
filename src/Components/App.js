import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom"

import NavBar from './NavBar';
import DrinkContainer from './DrinkContainer';
import Header from './Header';
import DrinkForm from './DrinkForm';
import Carousel from "./Carousel"





function App() {

  const [drinks, fillDrinks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cocktailsMocktails")
      .then((resp) => resp.json())
      .then((drinks) => fillDrinks(drinks))
  }, [])

  function addNewDrink(newDrink) {
    fillDrinks([...drinks, newDrink])
  }

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Carousel drinks={drinks} />
      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cocktails">
          <Cocktails />
        </Route>
        <Route path="/mocktails">
          <Mocktails />
        </Route>
        <Route path="/myrecipebook">
          <MyRecipeBook />
        </Route>
        <Route exact path="/projects/:id">
          <DrinkCards />
        </Route>
      </Switch> */}


      <DrinkContainer drinks={drinks} />
      <DrinkForm addNewDrink={addNewDrink} />
    </div>
  )
}

export default App;
