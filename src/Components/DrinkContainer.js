import React from "react";
// import{Link} from "react-router-dom";

import DrinkCards from "./DrinkCards";



function DrinkContainer({ drinks }) {
    const cards = drinks.map((drink) =>
        <DrinkCards key={drink.id} drink={drink} />
        )
    
    return (
        <div id="drink-collection">
            {/* <Link to={`/coctails/${cocktail}`}> */}
                {cards}
            {/* </Link> */}
        </div>
    )

}

export default DrinkContainer