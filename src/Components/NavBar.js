import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/aboutus">ABOUT US</NavLink>
      <NavLink to="/cocktails">COCKTAILS</NavLink>
      <NavLink to="/mocktails">MOCKTAILS</NavLink>
      <NavLink to="/drinkform">ADD A DRINK</NavLink>
      <div className="animation start-home"></div>
    </nav>
  )
}

export default NavBar;