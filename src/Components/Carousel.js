import SmartSlider from 'react-smart-slider';
import React from "react";
import ReactDOM from "react-dom";
// import 'react-animated-slider/build/horizontal.css';

// function Carousel(drinks) {
//     <Slider autoplay={3000}>
//                 <div
//                 key={index}
//                 style={{ background: `url('${bottleflipping.jpeg}') no-repeat center center` }}
//             >
//                 <div className="center">

//                     <button>NEXT</button>
//                 </div>
//             </div>
//     </Slider>

// }


// const DummyCaption = ({ caption }) => (
//     <div style={{
//         position: 'absolute',
//         right: 100,
//         top: 250,
//         fontSize: 38,
//         padding: 55,
//         border: 'solid 1px',
//     }}>
//         {caption}
//     </div>
// )
function Carousel() {
    const slidesArray = [
        {
            url: "bottleflipping.jpeg",
        },
        {
            url: "drinkcolors.jpeg",
        },
        {
            url: "drinkimages.jpeg",
        },
        {
            url: "drinkspritz.jpeg",
        },
        {
            url: "fire.jpeg",
        },
        {
            url: "images.jpeg",
        },
        {
            url: "smokydrink.jpeg",
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