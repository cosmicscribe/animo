import { useEffect, useState, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ThemeToggle from "./ThemeToggle";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        closeMenu();
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
      // Close menu on resize to desktop
      if (window.innerWidth > 768) setMenuOpen(false);
    });
  }, [closeMenu]);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          ANIMO
        </a>
        <a
          href="mailto:anirbanmondal.reach2@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          anirbanmondal.reach2@gmail.com
        </a>
        <div className="navbar-right">
          {/* Desktop nav links */}
          <ul className="nav-links-desktop">
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>

          <div className="navbar-theme-container">
            <ThemeToggle />
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            data-cursor="disable"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <nav className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <ul>
          <li>
            <a data-href="#about" href="#about" onClick={closeMenu}>ABOUT</a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={closeMenu}>WORK</a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={closeMenu}>CONTACT</a>
          </li>
        </ul>
      </nav>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
