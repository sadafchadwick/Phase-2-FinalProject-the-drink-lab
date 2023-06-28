import React from "react";
// import{Link} from "react-router-dom";

import DrinkCards from "./DrinkCards";
function DrinkContainer({ drinks }) {
    
        const cards = drinks.map((drink) =>
            <DrinkCards 
                name={drink.name}
                key={drink.id}
                image ={drink.image}
                cocktail={drink.cocktail}
                alcoholType={drink.alcoholType}
                ingredients={drink.ingredients}
                likes={drink.likes} />)
        return (
            <div id="drink-collection">
                {cards}
            </div>
        )
    
}

export default DrinkContainer