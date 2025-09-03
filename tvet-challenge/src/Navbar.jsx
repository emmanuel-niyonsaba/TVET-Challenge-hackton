import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import dark from "./assets/dark-icon.png";
import log from "./assets/log1.png";
import Language from "./hooks/Language";
import { Menu, X } from "lucide-react"; // icons for hamburger

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const googleTranslateRef = useRef(null);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
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
      <div className="hidden md:flex items-center gap-6">
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
        <Link
          to=""
          className="bg-green-500 rounded-2xl text-white font-bold px-4 py-2 hover:bg-green-600 transition"
        >
          Get Started
        </Link>
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
          <Link
            to=""
            onClick={() => setMenuOpen(false)}
            className="bg-green-500 rounded-2xl text-white font-bold px-4 py-2 hover:bg-green-600 transition"
          >
            Get Started
          </Link>

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
