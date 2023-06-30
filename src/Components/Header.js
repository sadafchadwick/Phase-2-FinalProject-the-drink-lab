import logo from "../carouselpics/logofordrinklab.jpg"


function Header(){
    return(
    <>
    <svg viewbox="0 0 100 20">
  <defs>
    <linearGradient id="gradient">
      <stop color="#8A2BE2"/>
    </linearGradient>
    <pattern id="wave" x="0" y="-0.5" width="100%" height="100%" patternUnits="userSpaceOnUse">
      <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" style={{mask:"#8A2BE2",fill:"#8A2BE2"}}> 
        <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1.5s"
            type="translate"
            from="0,0"
            to="40,0"
            repeatCount="indefinite" />
      </path>
    </pattern>
  </defs>
  <text color="#8A2BE2" text-anchor="middle" x="50" y="15" font-size="10" fill="#8A2BE2" fill-opacity="0.1">Drink Lab</text>
  <text color="#8A2BE2" text-anchor="middle" x="50" y="17" font-size="1" fill="#8A2BE2"  fill-opacity="1">Drink Lab</text>
</svg>

        <span>
        <img className="cocktailLab" src= {logo} alt="Logo for Drink Lab" style={{align: "center", float:"left", height: "120px", padding: "15px"}}/>
        
        </span>
        <h3 className="secondHeader">Created by Sadaf Chadwick, Paul Macellaro, and Amelia Freeman</h3>
    </>
    )
}

export default Header