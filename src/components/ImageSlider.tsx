import { CarouselImages } from "../util/carouselImages";


const ImageSlider = () => {
    const carousel = CarouselImages.map((image) => <div className="bg-frame"><img src={image} alt="carousel image" /></div>);
    return (
        <section className="image-slider">
            {carousel}
        </section>
    );
}

export default ImageSlider