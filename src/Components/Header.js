import logo from "../carouselpics/logofordrinklab.jpg"


function Header(){
    return(
    <>
        <span>
        <img className="cocktailLab" src= {logo} alt="Logo for Drink Lab" style={{align: "center", float:"left", height: "120px", padding: "15px"}}/>
        <h1 className="mainHeader" style={{fontSize: "65px", padding:"25px"}}>Welcome to Our Drink Lab!</h1>
        </span>
        <h3 className="secondHeader">Created by Sadaf Chadwick, Paul Macellaro, and Amelia Freeman</h3>
    </>
    )
}

export default Header