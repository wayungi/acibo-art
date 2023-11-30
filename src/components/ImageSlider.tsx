import { useState, useEffect } from "react";
import { CarouselImages } from "../util/carouselImages";


const ImageSlider = () => {
    const delay = 3000;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => setIndex((prevIndex) => prevIndex ===  CarouselImages.length - 1 ? 0 : prevIndex + 1), delay);
        // return () => {};
    }, [index])


    const carousel = CarouselImages.map((image) => <div 
        className="slide-show" style={{ transform: `translate(${-index * 100}%)` }}
        >
        <img src={image} alt="carousel image" className="slide"/>
        </div>
    );
    const slideShowDots = CarouselImages.map((_, index) => <div key={index} className="slide-show-dot"></div>);

    return (
        <section className="image-slider">
            {carousel}
            <div className="slide-show-dots">
                {slideShowDots}
            </div>
        </section>
    );
}

export default ImageSlider