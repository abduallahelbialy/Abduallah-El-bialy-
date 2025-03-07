import React, { useContext } from 'react'
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/17aad51ae07768316c823f0993290a70.png";
import HOC from "../../img/hoc.png";
import HOCc from "../../img/Screenshot 2024-11-22 180625.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from '../../Context';

const Portfolio = () => {
     const theme = useContext(themeContext);
     const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOCc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio