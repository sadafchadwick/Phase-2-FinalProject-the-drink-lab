import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav';
import DrinkContainer from './DrinkContainer';
import Header from './Header';
import Carousel from './Carousel';


function App() {

  const [drinks, fillDrinks] = useState([])
  useEffect(() => {
    fetch("")
  }, [])
  return (
    <div className="App">
      <Nav />
      <DrinkContainer />
      <Header />
      <Carousel />
    </div>
  );
}

export default App;
