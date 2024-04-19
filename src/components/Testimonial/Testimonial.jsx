import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide, Pagination } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = ({ clients }) => {
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt="" />
              <span className="mt-3" style={{ fontSize: "16px" }}>
                {client.review}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
