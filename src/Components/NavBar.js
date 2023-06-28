import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

  return (
    <nav>
      <a>
        <NavLink to="/">Home</NavLink>
      </a>
      <a>
        <NavLink to="/cocktails">Cocktails</NavLink>
      </a>
      <a>
        <NavLink to="/mocktails">Mocktails</NavLink>
      </a>
      <a>
        <NavLink to="/myrecipebook">My Recipe Book</NavLink>
      </a>
      <div className="animation start-home"></div>
    </nav>

  )
}

export default NavBar;
