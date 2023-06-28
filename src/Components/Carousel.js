import SmartSlider from 'react-smart-slider';
import React from "react";
import image1 from "../carouselpics/photo1.jpg"
import image2 from "../carouselpics/photo2.jpg"
import image3 from "../carouselpics/photo3.jpg"
import image4 from "../carouselpics/photo4.jpg"
// import ReactDOM from "react-dom";

function Carousel() {
    const slidesArray = [
        {
            url: image1,
        },
        {
            url: image2,
        },
        {
            url: image3,
        },
        {
            url: image4,
        },
    ];
    return (
        <div className="App">
            <h1>THE DRINK LAB</h1>
            <SmartSlider
                slides={slidesArray}
                // buttonShape="square" // round or square
                autoSlide={true}
            />
        </div>
    );
}





export default Carousel