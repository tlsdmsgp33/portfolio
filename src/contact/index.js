import "./index.css";
import React from "react";
import "../common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";

function ContactSection() {
  return (
    <section id="contact">
      <div className="section_container">
        <div className="contact_box">
          <div className="contact_link">
            <a href="https://github.com/HideOnCodec">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href="https://www.instagram.com/eunhye1366/">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a href="https://velog.io/@tlsdmsgp33">
              <FontAwesomeIcon icon={faBlogger} className="icon" />
            </a>
          </div>
          <span>COPYRIGHT 2022. Cindy. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
