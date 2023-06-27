import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {

  return (
    <nav className="wholeNav">
        <span>
          <button className="navbutton">
          <NavLink to="/">HOME</NavLink>
          </button>
        </span>
        <span>
          <NavLink to="/cocktails">COCKTAILS</NavLink>
        </span>
        <span>
          <NavLink to="/mocktails">MOCKTAILS</NavLink>
        </span>
        <span>
          <NavLink to="/myrecipebook">MY RECIPE BOOK</NavLink>
        </span>
    </nav>
  )  
}      

export default NavBar;
