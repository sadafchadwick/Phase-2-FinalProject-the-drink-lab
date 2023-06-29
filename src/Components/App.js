import { useEffect, useState } from 'react'
import { Switch, Route } from "react-router-dom"
import NavBar from './NavBar';
import Header from './Header';


import DrinkForm from './DrinkForm';
import DrinkContainer from './DrinkContainer';
import Carousel from "./Carousel"
import AboutUs from "./AboutUs"


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
      </div>
      <div className="App2">
        <Switch>
          <Route exact path="/">
            <Carousel />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
      <Route path="/cocktails" >
        <DrinkContainer drinks={drinks.filter(drink => drink.cocktail === true)} id="drink-collection"/>
        </Route>
        <Route path="/mocktails">
        <DrinkContainer drinks={drinks.filter(drink => drink.cocktail === false)} id="drink-collection"/>
        </Route>
          <Route path="/drinkform">
            <DrinkForm addNewDrink={addNewDrink} />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App;