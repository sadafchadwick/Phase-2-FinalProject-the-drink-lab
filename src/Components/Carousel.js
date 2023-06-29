import SmartSlider from 'react-smart-slider';
import React from "react";
import image1 from "../carouselpics/photo1.jpg"
import image2 from "../carouselpics/photo2.jpg"
import image3 from "../carouselpics/photo3.jpg"
import image4 from "../carouselpics/photo4.jpg"
import image5 from "../carouselpics/photo5.jpg"
import image6 from "../carouselpics/photo6.jpg"
import image7 from "../carouselpics/photo7.jpg"
import image8 from "../carouselpics/photo8.jpg"
import image9 from "../carouselpics/photo9.jpg"

function Carousel() {
    const slidesArray = [
        {
            url: image1,
        },
        {
            url: image2,
        },
        {
            url: image9,
        },
        {
            url: image8,
        },
        {
            url: image3,
        },
        {
            url: image6,
        },
        {
            url: image7,
        },
        {
            url: image4,
        },
        {
            url: image5,
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