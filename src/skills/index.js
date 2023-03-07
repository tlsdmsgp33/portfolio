import "./index.css";
import React from "react";
import "../common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillsSection() {
  const skillLeft = [
    ["HTML", 80],
    ["CSS", 80],
    ["React", 70],
    ["Spring", 30],
    ["JSP", 60],
    ["Express", 70],
  ];

  const skillRight = [
    ["JAVA", 90],
    ["C", 90],
    ["Python", 60],
    ["JavaScript", 60],
    ["MySQL", 80],
    ["Android", 60],
  ];

  return (
    <section id="skills">
      <div className="section_container">
        <h1>Skills</h1>
        <div className="skillset">
          <div className="skillset_left">
            <h3 className="skillset_title">Web</h3>
            {skillLeft.map((skill, index) => {
              return (
                <div className="skill" key={index}>
                  <div className="skill_description">
                    <span>{skill[0]}</span>
                    <span>{skill[0]}%</span>
                  </div>
                  <div className="skill_bar">
                    <div
                      className="skill_value"
                      style={{ width: skill[1] + "%" }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="skillset_right">
            <div className="Others">
              <h3 className="skillset_title">Others</h3>
              {skillRight.map((skill, index) => {
                return (
                  <div className="skill" key={index}>
                    <div className="skill_description">
                      <span>{skill[0]}</span>
                      <span>{skill[0]}%</span>
                    </div>
                    <div className="skill_bar">
                      <div
                        className="skill_value"
                        style={{ width: skill[1] + "%" }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="tools">
              <h3 className="skillset_title">Tools</h3>
              <ul className="tools_list">
                <li>git</li>
                <li>visual code & visual studio</li>
                <li>Ubuntu</li>
                <li>Eclipse</li>
                <li>Android Studio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
