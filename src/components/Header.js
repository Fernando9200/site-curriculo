import React from "react";
import Typed from "react-typed";

const Header = () => {
  return ( 
  <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>web developments and websites otimizations</h1>
        <Typed
            className="typed-text"
            strings={["Mobile Development", "Web Development", "Search Engine Otimization"]}
            typeSpeed={40}
            backSpeed={60}
            loop
        />
        <a href="#" className="btn-main-offer">contact me</a>
      </div>
  </div> );
};

export default Header;
