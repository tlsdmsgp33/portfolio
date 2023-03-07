import "./index.css";
import React from "react";
import "../common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCakeCandles,
  faBuildingColumns,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  return (
    <section id="about">
      <div className="section_container">
        <h1>About me</h1>
        <div className="about_box">
          <div className="about_introduce">
            저는 컴퓨터학부를 전공하고있는 3학년 백엔드 개발자입니다. 웹
            개발뿐만 아니라 전공 지식인 CS와 알고리즘 공부를 꾸준히
            하고있습니다.
            <br />
            스프링 프레임워크와 리액트를 사용하고 있으며 자바와 C언어, 파이썬을
            다룰 수 있습니다.
            <br />
            다양한 분야 공부에 빠르게 적응하며 이를 적용하는 것을 좋아합니다.
          </div>
          <div className="about_info">
            <div className="about_info_box">
              <FontAwesomeIcon icon={faUser}>이름</FontAwesomeIcon>
              <span>신은혜</span>
              <FontAwesomeIcon icon={faCakeCandles}> 생년월일 </FontAwesomeIcon>
              <span>2000.11.06</span>
            </div>
            <div className="about_info_box">
              <FontAwesomeIcon icon={faBuildingColumns}> 학력 </FontAwesomeIcon>
              <span>숭실대학교(컴퓨터학부)</span>
              <FontAwesomeIcon icon={faEnvelope}> 이메일 </FontAwesomeIcon>
              <span>qlrqod3356@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
