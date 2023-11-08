import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaLocationDot,
  FaPhone,
  FaRegEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import moment from "moment";

const Footer = () => {
  return (
    <div className="bg-primary/95 py-1 bg-no-repeat bg-bottom bg-[url('../src/assets/wave.svg')]">
      <div className="m-container grid grid-cols-1 lg:grid-cols-3 gap-6 text-white">
        <div>
          <div className="flex items-center mb-5">
            <img className="w-20" src={logo} alt="" />
            <span className="text-4xl pl-4 text-white"> Guide Nook</span>
          </div>
          <p>
            About Guide Nook Guide Nook is more than a travel platform; it's a
            celebration of exploration and local wisdom. Founded on the belief
            that travel is not just about the destination but the journey
            itself, Guide Nook brings you a curated collection of experiences
            crafted by passionate local guides. Our mission is to redefine the
            way you connect with the world, offering insights that go beyond the
            surface.
          </p>
        </div>
        <div className="pl-0 lg:pl-28">
          <p className="text-lg font-semibold mb-5">Useful Links</p>
          <div className="space-y-3">
            <Link to="/" className="block">
              Home
            </Link>
            <Link to="/services" className="block">
              Services
            </Link>
            <Link to="/login" className="block">
              Login
            </Link>
            <Link to="/registration" className="block">
              Registration
            </Link>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold mb-5">Contact Us</p>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <FaLocationDot />
              <span>Charghat, Rajshahi, Bangladesh</span>
            </p>
            <p className="flex items-center gap-2">
              <FaPhone />
              <a href="tel:01856000000">+880 1856000000</a>
            </p>
            <p className="flex items-center gap-2">
              <FaRegEnvelope />
              <a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a>
            </p>
          </div>
          <p className="text-lg font-semibold mt-10 mb-5">Follow Us</p>

          <div className="social flex gap-5">
            <a
              className="bg-white hover:bg-black text-primary hover:text-white p-3 text-center rounded-full"
              href="#"
            >
              <FaFacebookF />
            </a>
            <a
              className="bg-white hover:bg-black text-primary hover:text-white p-3 text-center rounded-full"
              href="#"
            >
              <FaTwitter />
            </a>
            <a
              className="bg-white hover:bg-black text-primary hover:text-white p-3 text-center rounded-full"
              href="#"
            >
              <FaInstagram />
            </a>
            <a
              className="bg-white hover:bg-black text-primary hover:text-white p-3 text-center rounded-full"
              href="#"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="m-container my-0">
        <hr />
        <p className="text-center text-white my-5">
          @ Guide Nook {moment().format("YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
