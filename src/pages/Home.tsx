import BackgroundImageSlider from "../components/ImageSlider";
import NavBar from "../components/NavBar";

const Home = () => {

  return (
    <section className="home-page">
      <NavBar />
      <div className="home-page-overlay">
        <div>
          <h1>PAK AMARA</h1>
          <p>ARTIST, KAMPALA</p>
          <a href="#" className="view-works">VIEW WORKS</a>
        </div>
      </div>
      <BackgroundImageSlider />
    </section>
  );
}

export default Home;
