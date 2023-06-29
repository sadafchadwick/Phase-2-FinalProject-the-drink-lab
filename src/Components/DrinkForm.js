import { useState } from "react"

function DrinkForm({ addNewDrink }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [cocktail, setCocktail] = useState(false)

    const [alcoholType, setAlcoholType] = useState("")
    const [ingredientOne, setIngredientOne] = useState("")
    const [ingredientTwo, setIngredientTwo] = useState("")
    const [ingredientThree, setIngredientThree] = useState("")
    const [ingredientFour, setIngredientFour] = useState("")

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleImage(e) {
        setImage(e.target.value)
    }

    function handleSelect(e) {
        setCocktail(!cocktail)
    }

    function handleAlcoholType(e) {
        setAlcoholType(e.target.value)
    }

    function handleIngredientOne(e) {
        setIngredientOne(e.target.value)
    }

    function handleIngredientTwo(e) {
        setIngredientTwo(e.target.value)
    }

    function handleIngredientThree(e) {
        setIngredientThree(e.target.value)
    }

    function handleIngredientFour(e) {
        setIngredientFour(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/cocktailsMocktails", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, image, alcoholType, cocktail: (cocktail ? true : false), ingredients:
                    [ingredientOne, ingredientTwo, ingredientThree, ingredientFour],
                likes: 0
            })
        })
            .then(r => r.json())
            .then(newDrink => addNewDrink(newDrink))
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3
                    className="add-drink"
                >
                    Add Your Drink!
                </h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Drink name here"
                    className="input-text"
                    onChange={handleNameChange}
                />
                <br />
                <input
                    type="text"
                    name="image"
                    placeholder="Paste image here"
                    className="input-text"
                    onChange={handleImage}
                />
                <br />
                <select
                    className="select-text"
                    onChange={handleSelect}
                >
                    <option value="True">
                        Is this a cocktail?
                    </option>
                    <option value={cocktail}>
                        True
                    </option>
                    <option value={!cocktail}>
                        False
                    </option>
                </select>
                <br />
                <input
                    type="text"
                    name="Alcohol Type"
                    placeholder="Alcohol type here"
                    className="input-text"
                    onChange={handleAlcoholType}
                />
                <br />
                <input
                    type="text"
                    name="Ingredient One"
                    placeholder="Add first ingredient here"
                    className="input-text"
                    onChange={handleIngredientOne}
                />
                <br />
                <input
                    type="text"
                    name="Ingredient Two"
                    placeholder="Add second ingredient here"
                    className="input-text"
                    onChange={handleIngredientTwo}
                />
                <br />
                <input
                    type="text"
                    name="Ingredient Three"
                    placeholder="Add third ingredient here"
                    className="input-text"
                    onChange={handleIngredientThree}
                />
                <br />
                <input
                    type="text"
                    name="Ingredient Four"
                    placeholder="Add fourth ingredient here"
                    className="input-text"
                    onChange={handleIngredientFour}
                />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Create New Drink"
                    className="submit"
                />
            </form>
        </div>
    )
}

export default DrinkForm