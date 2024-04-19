import React from "react";
import "../Navbar/navbar.css";
import Toggle from "../Toggle/Toggle";
const Navbar = ({ navLinks }) => {
  return (
    <React.Fragment>
      <div className="n-wrapper ">
        <div className="n-left ">
          <div className="n-name">Elbialy</div>
         <Toggle/>
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
          <button className="button n-button">Contact us</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
