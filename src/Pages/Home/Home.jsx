

import AboutBuildings from "./AboutBuildings";
import Banner from "./Banner";
const Home = () => {
  return (
    <div>
      <section id="banner">
        <Banner></Banner>
      </section>
      <section id="about-building" className="p-2">
        <AboutBuildings></AboutBuildings>
      </section>
    </div>
  );
};

export default Home;
