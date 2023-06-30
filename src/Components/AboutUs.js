import Frankie from "../carouselpics/FrankieMasterMixer.JPG"


function AboutUs() {
    return (
        <div className="App">
            <img src={Frankie} alt="Frankie the mixmaster at work"
                style={{
                    height: "400px", width: "40%",
                    display: "flex",
                    backgroundColor: "orange",
                    color: "white",
                    borderRadius: "50%",
                    padding: 10,
                }}
            />
            <h1 style={{ fontSize: "50px" }}>About Us:</h1>
            <p style={{ fontSize: "25px", fontFamily: "Helvetica", lineHeight: 2, padding: 120 }}>Welcome to our vibrant mixology website, a haven for all beverage enthusiasts seeking the perfect drink, be it alcoholic or non-alcoholic. We are dedicated to providing a comprehensive platform where you can explore a vast collection of meticulously curated recipes that cater to every palate. From classic cocktails to refreshing mocktails, our diverse range of drink options ensures there's something for everyone. Elevate your mixology skills with our engaging classes and workshops led by industry experts, where you can learn the art of crafting exceptional beverages, experiment with flavors, and discover exciting techniques. We believe in the power of community, which is why we invite you to be part of our mixology family. Share your own innovative recipes and unique creations through our interactive form, ensuring that our collection remains dynamic and reflective of the ever-evolving world of drinks. Join us on this delightful journey of flavor exploration, creativity, and community, as we raise a glass to the joy of mixology. Cheers!</p>
        </div>
    )
}

export default AboutUs