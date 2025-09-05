import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import dark from "./assets/dark-icon.png";
import log from "./assets/log1.png";
import Language from "./hooks/Language";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth"; // import your useAuth hook

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const googleTranslateRef = useRef(null);

  const { isLoggedIn, user, logout } = useAuth();

  // Dark mode effect
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "black" : "white";
    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]);

  // Language change handler
  const handleLanguageChange = (value) => {
    const lang = value.code;
    const combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = lang;
      const event = new Event("change");
      combo.dispatchEvent(event);
    }
  };

  // Google translate init
  useEffect(() => {
    let intervalId;
    const googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        clearInterval(intervalId);
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
            includedLanguages: "fr,es,sw,rw,en",
            layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
          },
          googleTranslateRef.current
        );
      }
    };
    intervalId = setInterval(googleTranslateElementInit, 100);
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return (
    <nav
      className="flex justify-between items-center p-4 md:px-10 shadow-md sticky top-0 z-50"
      style={{
        background: darkMode ? "#222" : "#f3f3f3",
        color: darkMode ? "white" : "black",
      }}
    >
      {/* Logo */}
      <div>
        <img src={log} alt="logo" className="w-28 md:w-36" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 relative">
        <div
          id="google_translate_element"
          style={{ display: "none" }}
          ref={googleTranslateRef}
        ></div>
        <Language onLanguageChange={handleLanguageChange} className="bg-transparent w-full" />

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sectors">Sectors</Link>
        <Link to="/successStories">Success Stories</Link>
        <Link to="/carriesPathWays">Carries Pathways</Link>
        { !isLoggedIn && <Link
          to="/auth"
          className="bg-green-500 rounded-2xl text-white font-bold px-4 py-2 hover:bg-green-600 transition"
        >
          Get Started
        </Link>}

              
{isLoggedIn && (
  <div className="relative">
    <button
      onClick={() => setAccountOpen(!accountOpen)}
      className="flex items-center gap-2 bg-green-500 text-white font-bold px-3 py-2 rounded-2xl hover:bg-green-600 transition"
    >
      <User size={20} /> <ChevronDown size={16} />
    </button>

    {accountOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-black z-50 px-2 border border-gray-300">
        <p className="px-4 py-2 border-b border-gray-300">{user?.email}</p>
        <button
          onClick={logout}
          className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer "
        >
          Logout
        </button>
      </div>
    )}
  </div>
)}

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border"
          style={{
            borderColor: darkMode ? "white" : "black",
          }}
        >
          <img src={dark} alt="toggle theme" className="w-5" />
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center gap-4 py-6 md:hidden"
          style={{
            background: darkMode ? "#222" : "#f3f3f3",
            color: darkMode ? "white" : "black",
          }}
        >
          <Language onLanguageChange={handleLanguageChange} className="bg-transparent w-full" />
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/sectors" onClick={() => setMenuOpen(false)}>Sectors</Link>
          <Link to="/successStories" onClick={() => setMenuOpen(false)}>Success Stories</Link>
          <Link to="/carriesPathWays" onClick={() => setMenuOpen(false)}>Carries Pathways</Link>

        
{isLoggedIn && (
  <div className="relative">
    <button
      onClick={() => setAccountOpen(!accountOpen)}
      className="flex items-center gap-2 bg-green-500 text-white font-bold px-3 py-2 rounded-2xl hover:bg-green-600 transition"
    >
      <User size={20} /> <ChevronDown size={16} />
    </button>

    {accountOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-black z-50">
        <p className="px-4 py-2 border-b">{user?.email}</p>
        <button
          onClick={logout}
          className="w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    )}
  </div>
)}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border"
            style={{
              borderColor: darkMode ? "white" : "black",
            }}
          >
            <img src={dark} alt="toggle theme" className="w-5" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
