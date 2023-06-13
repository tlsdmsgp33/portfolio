import "./index.css";
import React from "react";
import "../common.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ProjectSection() {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <section id="project">
      <div className="section_container">
        <h1>Project</h1>
        <Swiper
          className="swiper_container"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="swiper-slide">
            <div className="project_box">
              <div className="project_title">
                <span className="project_name">
                  오늘의 향수(안드로이드 앱 개발)
                </span>
                <h5>3명 팀 개발</h5>
              </div>
              <div className="project_content">
                <div className="img-box">
                  <img src="img/perfume1.png" alt="Todays_perfume" />
                </div>
                <div className="project_description">
                  <p>
                    오늘의 향수는 사용자의 취향과 날씨를 반영하여 데일리 향수를
                    추천하는 앱입니다. <br />
                    사용자가 로그인해서 직접 좋아하는 향과 재료를 선택하면
                    사용자의 모든 정보가 데이터베이스에 저장됩니다. <br />
                    추가로 오늘의 날씨까지 반영하여 자동으로 어울리는 향수를
                    추천하는 알고리즘을 적용합니다. 또한 GPS API를 이용하여
                    사용자 주변의 해당 향수를 구매할 수 있는 상점 목록을
                    출력합니다.
                    <br />
                    특정 상점을 터치하면 사용자 위치부터 해당 상점까지의 경로를
                    네비게이션 API를 통해 안내합니다. 추천 향수 이외의 여러 향수
                    목록을 보여주는 기능이 있으며 사용자들의 후기와 평균 별점을
                    볼 수 있습니다.
                  </p>
                  <div className="project_info_box">
                    <div className="project_info">
                      <h3>Date</h3>
                      <span> 2020-12-13</span>
                    </div>
                    <div className="project_info">
                      <h3>Using</h3>
                      <span> JAVA, FireBase, AndroidStudio</span>
                    </div>
                    <div className="project_info">
                      <h3>Role</h3>
                      <span>
                        프로토타입 설계, 화면 구현, 데이터베이스 구축 및 추천
                        알고리즘
                        <br />
                        로그인 기능, GPS 탐색 기능
                      </span>
                    </div>
                    <div className="project_info">
                      <FontAwesomeIcon icon={faLinkedin} />
                      <a href="https://sulfuric-taxicab-2b7.notion.site/2851e696bb444bd880b8af6c79a4e18f?pvs=4">
                        프로젝트 포트폴리오 바로가기(link)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide">
            <div className="project_box">
              <div className="project_title">
                <span className="project_name">그랩 마켓 개발</span>
                <h5>클론 코딩, 1인 개발</h5>
              </div>
              <div className="project_content">
                <div className="img-box">
                  <img src="img/webMarket.png" alt="webMarket" />
                </div>
                <div className="project_description">
                  <p>
                    웹 쇼핑몰을 교육 강의를 들으며 클론 코딩했습니다.
                    <br />
                    기본적인 상품 등록, 주문, 배너 등록 등의 쇼핑몰 기능을
                    포함하고 있습니다.
                    <br />
                    모든 쇼핑몰 정보를 데이터베이스를 통해 관리하고 있으며, 동적
                    웹페이지로 구현되어 클라우드에 배포되었습니다.
                    <br />
                    상품 추천 AI 알고리즘, 모바일 앱 등의 추가 기능을
                    구현했습니다.
                  </p>
                  <div className="project_info_box">
                    <div className="project_info">
                      <h3>Date</h3>
                      <span> 2022-08-25</span>
                    </div>
                    <div className="project_info">
                      <h3>Using</h3>
                      <span> React, Node.js, Express, SQLite, Postman</span>
                    </div>
                    <div className="project_info">
                      <h3>Role</h3>
                      <span> 프론트 엔드, 백엔드</span>
                    </div>
                    <div className="project_info">
                      <FontAwesomeIcon icon={faLinkedin} />
                      <a href=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="project_box">
              <div className="project_title">
                <span className="project_name">포트폴리오 사이트 제작</span>
                <h5>1인 개발</h5>
              </div>
              <div className="project_content">
                <div className="img-box">
                  <img src="img/Avatar-Maker.png" alt="Portfolio" />
                </div>
                <div className="project_description">
                  <p>
                    지금 보고계신 포트폴리오 사이트입니다.
                    <br />
                    간단한 HTML, CSS, React를 이용하여 여러 정보를 보여주는
                    포트폴리오를 제작했습니다.
                  </p>
                  <div className="project_info_box">
                    <div className="project_info">
                      <h3>Date</h3>
                      <span> 2022-12-21</span>
                    </div>
                    <div className="project_info">
                      <h3>Using</h3>
                      <span> Html, CSS, React</span>
                    </div>
                    <div className="project_info">
                      <h3>role</h3>
                      <span> 프론트 엔드, 백엔드</span>
                    </div>
                    <div className="project_info">
                      <FontAwesomeIcon icon={faLinkedin} />
                      <a href=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectSection;
