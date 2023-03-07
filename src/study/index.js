import "./index.css";
import React from "react";
import "../common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function StudySection() {
  return (
    <section id="study">
      <div className="section_container">
        <h1>Study</h1>
        <div className="study_box">
          <h3 className="study_name">IT 블로그</h3>
          <img src="img/blogMain.png" className="study_img" />
          <p>
            프로젝트, CS지식, 알고리즘 관련 스터디 지식을 정리한 IT 블로그를
            운영하고 있습니다.
          </p>
          <a href="https://velog.io/@tlsdmsgp33">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StudySection;
