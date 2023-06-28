import React from "react";
// import{Link} from "react-router-dom";

import DrinkCards from "./DrinkCards";
function DrinkContainer({ drinks }) {
    
        const cards = drinks.map((drink) =>
            <DrinkCards 
                name={drink.name}
                id={drink.id}
                image ={drink.image}
                cocktail={drink.cocktail}
                alcoholType={drink.alcoholType}
                ingredients={drink.ingredients}
                likes={drink.likes} />)
        return (
            <div>
                {cards}
            </div>
        )
    
}

export default DrinkContainer