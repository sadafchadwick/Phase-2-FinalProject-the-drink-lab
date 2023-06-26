import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import DrinkContainer from './DrinkContainer';
import Header from './Header';
import Carousel from './Carousel';


function App() {

  const [drinks, fillDrinks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cocktailsMocktails")
    .then((resp) => resp.json())
    .then((drinks) => fillDrinks(drinks))
  }, [])

  console.log(drinks)
  return (
    <div className="App">
     {/* <Nav />
      <Header />*/}
      <DrinkContainer drinks={drinks}/>
    <Carousel drinks={drinks}/> 
    </div>
  );
}

export default App;
