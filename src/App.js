import "./App.css";
import Nav from "./components/nav";
import Header from "./components/header";
import TechStack from "./components/techstack";
import Projects from "./components/projects";
import AboutMe from "./components/aboutme";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      {theme === "light" &&
              <button onClick={toggleTheme} className="dark-light-toggle-btn"><Icon icon="ph:moon" width="30" height="30" /></button>
      }
      {theme === "dark" &&
              <button onClick={toggleTheme} className="dark-light-toggle-btn"><Icon icon="ph:sun" width="30" height="30" />
              </button>
      }
      <Nav />
      <Header />
      <TechStack />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
