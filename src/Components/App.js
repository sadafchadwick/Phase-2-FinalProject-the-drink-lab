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

  const [cocktail, setCocktail] = useState(true)

  function byCocktail(drinks) {
    if (drinks.cocktail === true) {
      return true
    } else {
      return false
    }
  }
  const filteredDrinks = (cocktail ? drinks.filter(byCocktail) : drinks)


  function handleClick(value) {
    setCocktail(value)
  }

  return (
    <>
      <div className="App">
        <Header />
        <NavBar />
      </div>
      <div className="drink-collection">
        <Switch>
          <Route exact path="/">
            <Carousel />
            {/* <DrinkContainer drinks={drinks} /> */}
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/drinks">
            <DrinkContainer drinks={filteredDrinks} onClick={() => handleClick(true)} id="drink-collection" />
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