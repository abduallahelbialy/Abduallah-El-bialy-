import React from 'react'
import "./Footer.css";
import Wave from "../../img/wave.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>abduallahelbialy@gmail.com</span>
        <div className="f-icons">
          <a
            target="blank"
            href="https://www.instagram.com/abdauallah_elbialy/"
          >
            <AiOutlineInstagram color="white" size={"3rem"} />
          </a>
          <a
            target="blank"
            href="https://www.facebook.com/profile.php?id=100007727587344"
          >
            <FaFacebook color="white" size={"3rem"} />
          </a>
          <a target="blank" href="https://github.com/abduallahelbialy">
            <BsGithub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer