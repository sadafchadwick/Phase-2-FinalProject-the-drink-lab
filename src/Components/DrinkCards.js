import React from "react";

function DrinkCards(drink) {
    return(
    <li className="cards__item">
    <div className="card">
      <img
        src={drink.image}
        alt={drink.name}
        className="card__image"
      />
      <div className="card__content">
        <div className="card__title">{drink.name}</div>
        </div>
      </div>
  </li>)
}

export default DrinkCards