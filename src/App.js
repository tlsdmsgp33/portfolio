import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useRef } from "react";
//import "./common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AboutSection from "./about/index.js";
import ContactSection from "./contact/index.js";
import HomeSection from "./home/index.js";
import ProjectSection from "./project/index.js";
import SkillsSection from "./skills/index.js";
import StudySection from "./study/index.js";

function App() {
  // navbar scroll animation
  const navbar = useRef();
  const bars = useRef();
  const navbarHeight = 80;
  const navbarmenu = useRef();
  const toggle = useRef();

  const [ScrollActive, setScrollActive] = useState(false);
  const [ScrollY, setScrollY] = useState(0);

  function handleScroll() {
    if (ScrollY > navbarHeight) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  function handleClick(event) {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) return;

    if (navbarmenu.current.classList.contains("open"))
      navbarmenu.current.classList.remove("open");
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }
  function toggleClick(event) {
    navbarmenu.current.classList.toggle("open");
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <div className="body">
        <nav
          id="navBar"
          ref={navbar}
          className={ScrollActive ? "navbar--dark" : ""}
        >
          <div className="navbar_logo">
            <a className="logo_title" href="#">
              Portfolio
            </a>
          </div>
          <ul className="navbar_menu" ref={navbarmenu} onClick={handleClick}>
            <li className="navbar_menu_item" data-link="#home">
              Home
            </li>
            <li className="navbar_menu_item" data-link="#about">
              About
            </li>
            <li className="navbar_menu_item" data-link="#skills">
              Skills
            </li>
            <li className="navbar_menu_item" data-link="#project">
              Project
            </li>
            <li className="navbar_menu_item" data-link="#study">
              Study
            </li>
            <li className="navbar_menu_item" data-link="#contact">
              Contact
            </li>
          </ul>
          <button id="navbar_toggle" ref={toggle} onClick={toggleClick}>
            <FontAwesomeIcon
              icon={faBars}
              ref={bars}
              className={ScrollActive ? "bars navbar--dark" : "bars"}
            />
          </button>
        </nav>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <StudySection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
