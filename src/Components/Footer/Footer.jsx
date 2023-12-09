import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../Sidebar/Logo/Logo";
const Footer = () => {
  return (
    <div>
      <footer className="footer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 bg-base-200 text-base-content dark:bg-gray-800 dark:text-gray-200">
        <div className=" flex flex-col">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            className="flex items-center gap-2 cursor-pointer px-2 mb-4"
          >
            <Link to="/">
              <Logo></Logo>
            </Link>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            className="text-base ml-4"
          >
            <p>The Building Holder&apos;s</p>
            <p>Gulshan, Dhaka</p>
          </div>
        </div>
        <nav
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
        >
          <header className="footer-title">Our Location</header>
          <p>Address. No 131</p>
          <p>House No: 60/B </p>
          <p>Gulshan, Dhaka</p>
          <Link className="hover:underline font-medium">Get Direction</Link>
        </nav>
        <nav
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          className="flex-wrap"
        >
          <header className="footer-title">Contact Us</header>
          <a className="link link-hover">prh@gamil.com</a>
          <a className="link link-hover">phone: +8801304384232</a>
          <a className="link link-hover">Fax: +1 800 603 6038</a>
        </nav>
        <nav data-aos-easing="ease-in-out" data-aos-duration="800">
          <header            
            className="footer-title "
          >
            Stay Connected
          </header>
          <div className="flex-wrap">
            <h3
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              className="font-semibold text-gray-200"
            >
              Follow us on social media
            </h3>
          </div>
          <div className="flex items-center flex-wrap gap-4 mt-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="600"
              className="bg-gray-300 p-2 hover:bg-transparent border border-blue-400 rounded-full text-blue-600"
            >
              <FaFacebookF size={20} />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              className="bg-gray-300 p-2 hover:bg-transparent border border-blue-400 rounded-full text-blue-600"
            >
              <FaTwitter size={20} />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              className="bg-gray-300 p-2 hover:bg-transparent border border-blue-400 rounded-full text-blue-600"
            >
              <FaInstagram size={20} />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200"
              className="bg-gray-300 p-2 hover:bg-transparent border border-blue-400 rounded-full text-blue-600"
            >
              <FaGooglePlus size={20} />
            </div>
          </div>
        </nav>
      </footer>
      <div className="bg-black dark:bg-gray-500 dark:text-gray-200 text-white p-2 text-center mb-4">
        <h2>Copyright &copy; 2023 all right reserved by &apos;PRH&apos;</h2>
      </div>
    </div>
  );
};

export default Footer;
