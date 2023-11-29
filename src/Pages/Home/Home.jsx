import AboutBuildings from "./AboutBuildings";
import Banner from "./Banner";
import CuponSection from "./CuponSection";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <section id="banner">
        <Banner></Banner>
      </section>
      <section id="cupon" className="p-2">
        <CuponSection></CuponSection>
      </section>
      <section id="about-building" className="p-2">
        <AboutBuildings></AboutBuildings>
      </section>
    </div>
  );
};

export default Home;
