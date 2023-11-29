import { Link } from "react-router-dom";
import logo from "../../assets/602232.png";
import { FaFacebookF, FaGooglePlus, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
        <footer className="footer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 bg-base-200 text-base-content">
      <div className=" flex flex-col">
        <div className="flex items-center gap-2 btn btn-ghost px-2">
          <img src={logo} className="max-w-[40px] block " alt="logo" />
          <h2 className="text-2xl font-bold text-blue-800">PRH</h2>
        </div>
        <div className="text-base ml-4">
          <p>The Building Holder&apos;s</p>
          <p>Gulshan, Dhaka</p>
        </div>
      </div>
      <nav>
        <header className="footer-title">Our Location</header>
        <p>Address. No 131</p>
        <p>House No: 60/B </p>
        <p>Gulshan, Dhaka</p>
        <Link className="hover:underline font-medium">Get Direction</Link>
      </nav>
      <nav className="flex-wrap">
        <header className="footer-title">Contact Us</header>
        <a className="link link-hover">prh@gamil.com</a>
        <a className="link link-hover">phone: +8801304384232</a>
        <a className="link link-hover">Fax: +1 800 603 6038</a>
      </nav>
      <nav>
        <header className="footer-title">Stay Connected</header>
        <div className="flex-wrap">
          <h3 className="font-semibold text-gray-500">
            Follow us on social media
          </h3>
        </div>
        <div className="flex items-center flex-wrap gap-4 mt-4">
          <div className="bg-gray-300 p-2 hover:bg-transparent border border-blue-400 rounded-full text-blue-600">
            <FaFacebookF size={20}/>
          </div>
          <div className="bg-gray-300 p-2 hover:bg-transparent border border-blue-400 rounded-full text-blue-600">
            <FaTwitter size={20}/>
          </div>
          <div className="bg-gray-300 p-2 hover:bg-transparent border border-blue-400 rounded-full text-blue-600">
            <FaInstagram size={20}/>
          </div>
          <div className="bg-gray-300 p-2 hover:bg-transparent border border-blue-400 rounded-full text-blue-600">
            <FaGooglePlus size={20}/>
          </div>
        </div>
      </nav>
    </footer>
    <div className="bg-black text-white p-2 text-center">
        <h2>Copyright &copy; 2023 all right reserved by &apos;PRH&apos;</h2>
    </div>
    </div>
  );
};

export default Footer;
