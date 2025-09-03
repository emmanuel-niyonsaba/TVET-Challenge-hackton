import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:px-12">
        {/* Newsletter */}
        <div>
          <h2 className="font-bold text-lg mb-2">Stay Updated</h2>
          <p className="text-sm">
            Subscribe to our newsletter and receive the latest news about our
            products and services!
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="font-bold text-lg mb-3">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/sectors" className="hover:text-green-600">
                Sectors
              </Link>
            </li>
            <li>
              <Link to="/successStories" className="hover:text-green-600">
                Success Stories
              </Link>
            </li>
            <li>
              <Link to="/carriesPathWays" className="hover:text-green-600">
                Career Paths
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-bold text-lg mb-3">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li>Connect Graduates</li>
            <li>Internships Offer</li>
            <li>Data Management</li>
            <li>Portfolio</li>
            <li>Boost Awareness</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 p-4 md:px-12">
        {/* Social Links */}
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Link to="https://www.instagram.com/rtb_rwanda/" target="_blank">
            <InstagramIcon className="hover:text-pink-600 cursor-pointer" />
          </Link>
          <Link to="https://x.com/RTB_Rwanda" target="_blank">
            <XIcon className="hover:text-black cursor-pointer" />
          </Link>
          <Link to="https://www.youtube.com/@rwandatvetboard" target="_blank">
            <YouTubeIcon className="hover:text-red-600 cursor-pointer" />
          </Link>
          <Link to="https://www.linkedin.com" target="_blank">
            <LinkedInIcon className="hover:text-blue-700 cursor-pointer" />
          </Link>
        </div>

        {/* Back to Home */}
        <Link to="/">
          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            Back to Home <ArrowUpwardIcon fontSize="small" />
          </button>
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm py-3 border-t border-gray-300">
        © {new Date().getFullYear()} RTB-Rwanda. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
