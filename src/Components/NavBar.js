import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

  return (
    <nav>
      <a href="#animation animation start-about">HOME
        <NavLink to="/"></NavLink>
      </a>
      <a href="#animation start-blog">COCKTAILS
        <NavLink to="/cocktails"></NavLink>
      </a>
      <a href="#animation start-portefolio">MOCKTAILS
        <NavLink to="/mocktails"></NavLink>
      </a>
      <a href="#animation start-contact">MY RECIPE BOOK
        <NavLink to="/myrecipebook"></NavLink>
      </a>
      <div className="animation start-home"></div>
    </nav>

  )
}

export default NavBar;
