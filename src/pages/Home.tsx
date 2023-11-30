import BackgroundImageSlider from "../components/ImageSlider";
import NavBar from "../components/NavBar";

const Home = () => {

  return (
    <section className="home-page">
      <NavBar />
      <div className="home-page-overlay"></div>
      <BackgroundImageSlider />
    </section>
  );
}

export default Home;
