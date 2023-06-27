import React from "react";

function DrinkCards( {drink} ) {
    const {id, name, image, cocktail, alcoholType, ingredients, likes} = drink
    return (
        <div className="card" key={id}>
            <img
                src={image}
                alt={name}
                className="card_image"
            />
            <h2>{name}</h2>
            {/* <p>{alcoholType}</p>
            <p>{ingredients}</p> */}
            <button className="glow-on-hover" type="button">{likes} Likes  🎉</button>
        </div>
    )
}

export default DrinkCards


