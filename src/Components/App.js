import {useEffect, useState} from 'react'
import { Switch, Route } from "react-router-dom" 
import NavBar from './NavBar';
import Header from './Header';

import MyRecipeBook from './MyRecipeBook';
import DrinkForm from './DrinkForm';
import DrinkContainer from './DrinkContainer';
import Home from './Home';

// import Carousel from "./Carousel"


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
      if(drinks.cocktail === true) {
          return true
      } else {
        return false
      }
      }
  const filteredDrinks = (cocktail ? drinks.filter( byCocktail ) : drinks )
  

  function handleClick(value) {
    setCocktail(value)
  }

  return (
    <div className="App">
      <Header />
  
      <NavBar />
      {/* <Carousel drinks={drinks} /> */}
      <Switch>
        <Route path="/cocktails">
          <DrinkContainer drinks={filteredDrinks} onClick={handleClick(true)}/>
        </Route>
        <Route path="/mocktails">
          <DrinkContainer onClick={handleClick(false)}/>
        </Route>
        <Route path="/myrecipebook">
          <MyRecipeBook />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
     
      <div>
        {/* <DrinkContainerCocktails drinks={drinks} /> */}
        <DrinkForm addNewDrink={addNewDrink}/>
      </div>
    </div>
  )
}

export default App;
