import { CarouselImages } from "../util/carouselImages";


const ImageSlider = () => {
    const carousel = CarouselImages.map((image) => <img src={image} alt="carousel image" />);
    return (
    <div className="home-page">{carousel}</div>
    );
}

export default ImageSlider