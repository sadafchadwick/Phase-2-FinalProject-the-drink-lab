import { useState } from "react"

function DrinkForm({ addNewDrink }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [cocktail, setCocktail] = useState("null")

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
        setCocktail(e.target.value === "true");
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
        <div className="center">
            <form onSubmit={handleSubmit}>

                <h1
                >
                    Add Your Drink!
                </h1>
                <div className="inputbox" >
                    <input
                        type="text"
                        name="name"
                        placeholder="Drink name here"
                        onChange={handleNameChange}
                    />
                </div>
                <br />
                <div className="inputbox" >
                    <input
                        type="text"
                        name="image"
                        placeholder="Paste image here"
                        onChange={handleImage}
                    />
                </div>
                <br />
                <div className="inputbox" >
                    <select
                        className="select-text"
                        value={cocktail.toString()}
                        onChange={handleSelect}
                    >
                        <option value="">Is this a cocktail?</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <br />
                <div className="inputbox" >

                    <input className="inputbox"
                        type="text"
                        name="Alcohol Type"
                        placeholder="Alcohol type here"
                        onChange={handleAlcoholType}
                    />
                </div>
                <br />
                <div className="inputbox" >

                    <input className="inputbox"
                        type="text"
                        name="Ingredient One"
                        placeholder="Add first ingredient here"
                        onChange={handleIngredientOne}
                    />
                </div>
                <br />
                <div className="inputbox" >

                    <input className="inputbox"
                        type="text"
                        name="Ingredient Two"
                        placeholder="Add second ingredient here"
                        onChange={handleIngredientTwo}
                    />
                </div>
                <br />
                <div className="inputbox">
                    <input className="inputbox"
                        type="text"
                        name="Ingredient Three"
                        placeholder="Add third ingredient here"
                        onChange={handleIngredientThree}
                    />
                </div>
                <br />
                <div className="inputbox" >

                    <input className="inputbox"
                        type="text"
                        name="Ingredient Four"
                        placeholder="Add fourth ingredient here"
                        onChange={handleIngredientFour}
                    />
                </div>
                <br />
                <div className="inputbox" >

                    <input
                        type="submit"
                        name="submit"
                        value="Create New Drink"
                        className="submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default DrinkForm