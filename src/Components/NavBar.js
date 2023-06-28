import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {

  return (
    <nav>
      <>
      <a>HOME
      <NavLink to="/"></NavLink>
      </a>
      <a>COCKTAILS
        <NavLink to="/cocktails"></NavLink>
      </a>
      <a>MOCKTAILS
        <NavLink to="/mocktails"></NavLink>
      </a>
      <a>MY RECIPE BOOK
        <NavLink to="/myrecipebook"></NavLink>
      </a>
      <div className="animation start-home"></div>
      </>
    </nav>
    
  )
}



export default NavBar;