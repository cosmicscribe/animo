import { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import "./styles/ThemeToggle.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial preference from local storage or OS settings if desired later.
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDark(false);
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkState = !isDark;
    setIsDark(newDarkState);
    if (!newDarkState) {
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className={`theme-toggle ${isDark ? "dark" : "light"}`} onClick={toggleTheme}>
      <div className="theme-toggle-slider"></div>
      <BsMoonFill className="theme-icon moon-icon" />
      <BsSunFill className="theme-icon sun-icon" />
    </div>
  );
};

export default ThemeToggle;
