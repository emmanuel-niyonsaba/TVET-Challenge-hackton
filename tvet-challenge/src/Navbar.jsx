import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import dark from "./assets/dark-icon.png";
import log from "./assets/log1.png";
import Language from "./hooks/Language";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const googleTranslateRef = useRef(null)
  
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [darkMode]);

    const handleLanguageChange = (value) => {
      const lang = value.code;
      const combo = document.querySelector(".goog-te-combo");
       console.log(combo)
      if (combo) {
        combo.value = lang;
        console.log(combo)
        console.log(combo.value)
        const event = new Event("change");
        combo.dispatchEvent(event);
      }
  };

 useEffect(()=>{
      let intervalId;
            const googleTranslateElementInit = () => {
       if(window.google && window.google.translate){
        clearInterval(intervalId);
  
        new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages: "fr,es,sw,rw,en",
          layout:window.google.translate.TranslateElement.FloatPosition.TOP_LEFT
        },
        googleTranslateRef.current
      );
       }
    }; 
    intervalId = setInterval(googleTranslateElementInit,100)
    
    },[])
    
  return (
    <div
      className="flex justify-between p-6 items-center"
      style={{
        background: darkMode ? "#222" : "#f3f3f3",
        color: darkMode ? "white" : "black",
      }}
    >
      <div>
        <img src={log} alt=""  className=" w-30"/>
      </div>
      <div className="flex justify-between gap-5 items-center">
        {/* Language Selector */}
        {/* <select
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
        </select> */}

                            <div id="google_translate_element" style={{display: "none"}} ref={googleTranslateRef}></div>
                          <Language onLanguageChange={handleLanguageChange} className='bg-transparent w-full' />
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
