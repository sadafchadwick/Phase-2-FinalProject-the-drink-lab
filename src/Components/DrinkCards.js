import React from "react";

function DrinkCards( drink ) {
    const { id, name, image, cocktail, alcoholType, ingredients, likes } = drink
    return (
        <div className="artboard">
            <div className="card" key={id}>
            
                <div className="card__side card__side--back">
                    <div className="card__cover">
                        <h4 className="card__heading">
                            <span className="card__heading-span">{name}</span>
                        </h4>
                        </div>
                        <div className="card__details">
                            <ul>
                                <li>{alcoholType}</li>
                                <li>{ingredients[0]}</li>
                                <li>{ingredients[1]}</li>
                                <li>{ingredients[2]}</li>
                            </ul>
                    </div>
                        </div>
                        <div className="card__side card__side--front">
                        <span className="card__heading-span">{name}</span>

                            <div className="card__theme">
                            <img className="card-image"
                            src={image}
                            alt={name}
                        />
                                <div className="card__theme-box">
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default DrinkCards


