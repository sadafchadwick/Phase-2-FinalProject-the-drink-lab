import cocktailLab from "../Assets/CocktailLab.jpg"


function Header(){
    return(
    <>
        <span>
        <h1 className="mainHeader">Welcome to Our Drink Lab!</h1>
        <img className="cocktailLab" src= "../carouselpics/logofordrinklab.jpeg" alt="Logo for Drink Lab"/>
        </span>
        <h3 className="secondHeader">Created by Sadaf Chadwick, Paul Macellaro, and Amelia Freeman</h3>
    </>
    )
}

export default Header