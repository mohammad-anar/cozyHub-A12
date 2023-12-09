import SectionHeading from "../../Components/Shared/SectionHeading";
import building from "../../assets/buildings.jpg";
const AboutBuildings = () => {
  return (
    <div className="my-12">
      <SectionHeading        
        title={"About The Building"}
        subtitle={"Some Say"}
      ></SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full items-center justify-center p-4">
        <div className="relative">
          <h2 data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="800" className="text-base dark:text-white font-semibold mb-2">--Welcome</h2>
          <h1 data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="900" className="text-3xl dark:text-white font-medium mb-2">
            A tailored &apos;Primerental rental Hub &apos;
            <br /> experience
          </h1>
          <p data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="800" className="text-justify dark:text-white p-2">
            Discover the epitome of modern living at [Your Building Name].
            Nestled in a prime location, our building offers a luxurious and
            comfortable lifestyle tailored to meet your every need. Whether
            you&apos;re a young professional, a family, or anyone in between, we have
            the perfect apartment for you.
          </p>
          <ul data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="800">
            <h2 className="text-xl font-bold dark:text-white">Key Features:</h2>
            <li className="dark:text-gray-200">
              <span className="font-bold dark:text-white">Spacious Apartments:</span> Choose
              from a range of thoughtfully designed apartments, each offering
              spacious interiors and an abundance of natural light.
            </li>
            <li className="dark:text-gray-200">
              <span className="font-bold dark:text-white">Security and Privacy: </span> Enjoy
              contemporary living with access to state-of-the-art amenities,
              including a fitness center, rooftop lounge, and more.
            </li>
            <li className="dark:text-gray-200">
              <span className="font-bold dark:text-white">Prime Location:</span> Conveniently
              situated in [City/Area], our building is in close proximity to
              shopping centers, restaurants, and public transportation, making
              it easy to explore everything the city has to offer.
            </li>
            <li className="dark:text-gray-200">
              <span className="font-bold dark:text-white">Professional Management: </span> Our
              dedicated management team is committed to providing exceptional
              service. From maintenance requests to community events, we&apos;re here
              for you.
            </li>
            <li className="dark:text-gray-200">
              <span className="font-bold dark:text-white">Schedule a Tour:</span> Contact us
              today to schedule a tour of [Your Building Name]. Experience the
              luxury, comfort, and convenience that our building has to offer.
              Your new home awaits!
            </li>
          </ul>
        </div>
        <div className="order-first flex flex-col items-start justify-center lg:order-last h-full overflow-hidden  sm:p-0  relative">
          <img data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
            src={building}
            className="mt-8 md:mt-16 min-h-[400px] max-w-1/2 w-full sm:w-auto ml-6 lg:ml-8 mb-6 lg:mb-0 object-cover"
            alt="buildings image"
          />
          <div className="h-[400px] top-0 lg:top-20 -left-6 -z-10 w-full absolute bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutBuildings;
