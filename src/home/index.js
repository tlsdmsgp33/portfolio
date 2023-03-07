import "./index.css";
import React, { useEffect, useRef } from "react";
import "../common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function HomeSection() {
  // scrolling transparent
  const home = useRef();
  const homeHeight = 500;
  function opacityHandeler() {
    home.current.style.opacity = 1 - window.scrollY / homeHeight;
  }
  useEffect(() => {
    function Listener() {
      window.addEventListener("scroll", opacityHandeler);
    }
    Listener();
    return () => {
      window.removeEventListener("scroll", opacityHandeler);
    };
  });
  return (
    <section id="home">
      <div className="section_container">
        <div className="home_container" ref={home}>
          <h1 className="home_title">
            안녕하세요
            <br />웹 개발자 신은혜입니다
          </h1>
          <h2 className="home_description">
            저는 포기하지않고 끝까지 도전하는 근성을 가졌습니다.
          </h2>
          <button
            className="home_contact"
            onClick={() => {
              const scrollTo = document.querySelector("#contact");
              scrollTo.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <FontAwesomeIcon icon={faPhone} />
            <span>CONTACT</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
