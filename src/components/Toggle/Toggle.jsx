import React, { useContext } from 'react'
import { themeContext } from '../../Context';
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import "./Toggle.css";
const Toggle = () => {
      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
      const handleClick = () => {
        // debugger
        theme.dispatch({ type: "toggle" });
      };
  return (
    <div className="toggle" onClick={handleClick}>
      <BsMoon />
      <BsSun/>
      {/*toggle.css mein left ki property aik assign hy ussy delete
      
          krna hy pehly */}
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}

export default Toggle
