import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dark from "./assets/dark-icon.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [darkMode]);

  const handleLanguageChange = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div
      className="flex justify-between p-6 items-center"
      style={{
        background: darkMode ? "#222" : "#f3f3f3",
        color: darkMode ? "white" : "black",
      }}
    >
      <div>
        <h1 className="font-bold text-xl">Log</h1>
      </div>
      <div className="flex justify-between gap-5 items-center">
        {/* Language Selector */}
        <select
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="border-2 px-2 py-1"
          style={{
            background: darkMode ? "#333" : "white",
            color: darkMode ? "white" : "black",
          }}
        >
          <option value="">🌐 Language</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="sw">Swahili</option>
          <option value="ar">العربية</option>
          <option value="rw">Kinyarwanda</option>
        </select>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sectors">Sectors</Link>
        <Link to="/successStories">Success Stories</Link>
        <Link to="/carriesPathWays">Carries Pathways</Link>
        <Link
          to=""
          className="bg-green-500 rounded-2xl text-white font-bold p-3"
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
    </div>
  );
};

export default Navbar;
