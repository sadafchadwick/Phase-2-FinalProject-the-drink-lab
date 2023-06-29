import cocktailLab from "../Assets/CocktailLab.jpg"
import logo from "../carouselpics/logofordrinklab.jpg"


function Header(){
    return(
    <>
        <img className="cocktailLab" src= {logo} alt="Logo for Drink Lab" stlye={{align: "center"}}/>
        <span>
        <h1 className="mainHeader" style={{fontSize: "75px"}}>Welcome to Our Drink Lab!</h1>
        </span>
        <h3 className="secondHeader">Created by Sadaf Chadwick, Paul Macellaro, and Amelia Freeman</h3>
    </>
    )
}

export default Header