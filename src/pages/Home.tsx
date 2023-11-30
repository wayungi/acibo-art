import { CarouselImages } from "../util/carouselImages";

const Home = () => {

  const carousel = CarouselImages.map((image) => <img src={image} alt="carousel image" />)
  return (
  <div className="hpome-page">{carousel}</div>
  )
}

export default Home;
