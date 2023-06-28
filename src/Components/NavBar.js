import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

  return (
    <nav>
      <a>
        <NavLink to="/">HOME</NavLink>
      </a>
      <a>
        <NavLink to="/cocktails">COCKTAILS</NavLink>
      </a>
      <a>
        <NavLink to="/mocktails">MOCKTAILS</NavLink>
      </a>
      <a>
        <NavLink to="/myrecipebook">MY RECIPE BOOK</NavLink>
      </a>
      <div className="animation start-home"></div>
    </nav>

  )
}

export default NavBar;
