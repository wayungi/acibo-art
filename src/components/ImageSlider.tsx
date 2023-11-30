import { useState, useEffect } from "react";
import { CarouselImages } from "../util/carouselImages";


const ImageSlider = () => {
    const delay = 9000;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => setIndex((prevIndex) => prevIndex ===  CarouselImages.length - 1 ? 0 : prevIndex + 1), delay);
        return () => {};
    }, [index])


    const carousel = CarouselImages.map((image) => <div 
        className="slide-show" style={{ transform: `translate(${-index * 100}%)` }}
        >
        <img src={image} alt="carousel image" className="slide"/>
        </div>
    );
    const slideShowDots = CarouselImages.map((_, indx) => <div key={indx} className={`slide-show-dot ${index === indx ? "active" : ""}`}></div>);

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