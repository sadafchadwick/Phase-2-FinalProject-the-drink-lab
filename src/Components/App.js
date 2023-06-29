import {useEffect, useState} from 'react'
import { Switch, Route } from "react-router-dom" 
import NavBar from './NavBar';
import Header from './Header';

import MyRecipeBook from './MyRecipeBook';
import DrinkForm from './DrinkForm';
import DrinkContainer from './DrinkContainer';
import Home from './Home';
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
    <>
    <div className="App">
      <Header />
      <NavBar />
      <Carousel />
      </div>
      <div className="App2">
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        <Route path="/cocktails" >
        <DrinkContainer drinks={drinks.filter(drink => drink.cocktail === true)} id="drink-collection"/>
        <DrinkForm addNewDrink={addNewDrink}/>
        </Route>
        <Route path="/mocktails">
        <DrinkContainer drinks={drinks.filter(drink => drink.cocktail === false)} id="drink-collection"/>
        <DrinkForm addNewDrink={addNewDrink}/>
        </Route>
        <Route path="/myrecipebook">
          {/* <MyRecipeBook /> */}
        </Route>
        <Route exact path="/projects/:id">
          {/* <DrinkCards /> */}
        </Route>
      </Switch>
    </div>
        <DrinkForm addNewDrink={addNewDrink}/>
    </>
  )        
}

export default App;