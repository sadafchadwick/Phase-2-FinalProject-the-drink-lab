import cocktailLab from "../Assets/CocktailLab.jpg"

function Header(){
    return(
    <>
        <h1 className="mainHeader">Welcome to Our Drink Lab!</h1>
        <h3 className="secondHeader">Created by Sadaf Chadwick, Paul Macellaro, and Amelia Freeman</h3>
        <img className="cocktailLab" src={cocktailLab} alt="Drinks on a Bar Top"/>
    </>
    )
}

export default Header