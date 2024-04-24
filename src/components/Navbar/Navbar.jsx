import React from "react";
import "../Navbar/navbar.css";
import Toggle from "../Toggle/Toggle";
const Navbar = ({ navLinks }) => {
  return (
    <React.Fragment>
      <div className="n-wrapper ">
        <div className="n-left ">
          <div className="n-name">Elbialy</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              {navLinks &&
                navLinks.map((e) => {
                  return <li key={e.id}>{e.link}</li>;
                })}
            </ul>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=201028924906"
            target="blank"
          >
            <button className="button n-button">Contact us</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
