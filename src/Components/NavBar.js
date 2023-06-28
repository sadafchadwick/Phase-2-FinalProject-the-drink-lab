import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {

  return (
    <nav>
      <NavLink to="/">
      <a>HOME</a>
        </NavLink>
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
    </nav>

  )
}



export default NavBar;