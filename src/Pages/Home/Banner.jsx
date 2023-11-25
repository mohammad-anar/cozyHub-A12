import { FaLongArrowAltRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div>
            <Carousel
          emulateTouch={true}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={true}
          showThumbs={false}
        >
          <div className="max-h-[900px]">
            <img
              className="lg:min-h-[900px] md:min-h-[600px] min-h-[400px] object-cover max-h-[800px]"
              src={
                "https://manoir.themerex.net/wp-content/uploads/2023/06/image-79-copyright.jpg"
              }
            />
            <div
              style={{ backgroundColor: "transparent", height: "50%" }}
              className="legend h-[200px] absolute top-10 md:top-10 md:top-20  left-0 text-left flex items-start flex-col"
            >
              <div className="bg-black p-6 bg-opacity-20 rounded-xl ">
                <h2 className="text-3xl md:text-5xl lg:text-6xl  font-bold text-left leading-10">
                  Discover the Luxury House <br /> of Your Dreams
                </h2>
                <p className="text-left text-sm md:text-lg lg:w-1/2 w-11/12 mt-6">
                  Eiusm od tempor incididunt ut labore. Consectetur adipiscing
                  elit, sed do. Consectetur adipiscing elit, sed do eiusm
                  onsectetur adipiscing elit.
                </p>
                <button className="btn mt-6 btn-outline hover:border-amber-600 shadow-xl flex text-white">
                  Read more <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
          <div className="max-h-[800px]">
            <img
              className="lg:min-h-[900px] md:min-h-[600px] min-h-[400px] object-cover max-h-[800px]"
              src={
                "https://www.udr.com/globalassets/corporate/homepage/homepage_4_1274towson.jpg"
              }
            />
            <div
              style={{ backgroundColor: "transparent", height: "50%" }}
              className="legend h-[200px] absolute top-10 md:top-20  left-0 text-left flex items-start flex-col"
            >
              <div className="bg-black p-6 bg-opacity-20 rounded-xl ">
                <h2 className="text-3xl md:text-5xl lg:text-6xl  font-bold text-left ">
                  Discover the Luxury DrowingRoom <br /> of Your Dreams
                </h2>
                <p className="text-left text-sm md:text-lg lg:w-1/2 w-11/12 mt-6">
                  Eiusm od tempor incididunt ut labore. Consectetur adipiscing
                  elit, sed do. Consectetur adipiscing elit, sed do eiusm
                  onsectetur adipiscing elit.
                </p>
                <button className="btn mt-6 btn-outline hover:border-amber-600 shadow-xl flex text-white">
                  Read more <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
          <div className="max-h-[800px]">
            <img
              className="lg:min-h-[900px] md:min-h-[600px] min-h-[400px] object-cover max-h-[800px]"
              src="https://mapartments.co.uk/uploads/transforms/b235c4646ab36ef9ae959de20fa459fc/11257/401_topRenders_b_7abbbb2796f27c91ef535646dc2c5299.webp"
            />
            <div
              style={{ backgroundColor: "transparent", height: "50%" }}
              className="legend h-[200px] absolute top-10 md:top-20  left-0 text-left flex items-start flex-col"
            >
              <div className="bg-black p-6 bg-opacity-20 rounded-xl ">
                <h2 className="text-3xl md:text-5xl lg:text-6xl  font-bold text-left leading-10">
                  Discover the Luxury Bedroom <br /> of Your Dreams
                </h2>
                <p className="text-left text-sm md:text-lg lg:w-1/2 w-11/12 mt-6">
                  Eiusm od tempor incididunt ut labore. Consectetur adipiscing
                  elit, sed do. Consectetur adipiscing elit, sed do eiusm
                  onsectetur adipiscing elit.
                </p>
                <button className="btn mt-6 btn-outline hover:border-amber-600 shadow-xl flex text-white">
                  Read more <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
          <div className="max-h-[800px]">
            <img
              className="lg:min-h-[900px] md:min-h-[600px] min-h-[400px] object-cover max-h-[800px]"
              src="https://hips.hearstapps.com/hmg-prod/images/kitchen-remodel-ideas-hbx120121kristinfine-008-1651168839.jpg"
            />
            <div
              style={{ backgroundColor: "transparent", height: "50%" }}
              className="legend h-[200px] absolute top-10 md:top-20  left-0 text-left flex items-start flex-col"
            >
              <div className="bg-black p-6 bg-opacity-20 rounded-xl ">
                <h2 className="text-3xl md:text-5xl lg:text-6xl  font-bold text-left leading-10">
                  Discover the Luxury Kitchen <br /> of Your Dreams
                </h2>
                <p className="text-left text-sm md:text-lg lg:w-1/2 w-11/12 mt-6">
                  Eiusm od tempor incididunt ut labore. Consectetur adipiscing
                  elit, sed do. Consectetur adipiscing elit, sed do eiusm
                  onsectetur adipiscing elit.
                </p>
                <button className="btn mt-6 btn-outline hover:border-amber-600 shadow-xl flex text-white">
                  Read more <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
        </Carousel>
        </div>
    );
};

export default Banner;