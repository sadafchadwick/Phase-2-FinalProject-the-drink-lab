import DrinkCards from "./DrinkCards";

function DrinkContainer({drinks}) {
    
        const cards = drinks.map((drink) =>
            <DrinkCards 
                key={drink.id}
                name={drink.name}
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