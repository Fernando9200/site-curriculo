import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return ( 
  <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>web development and website optimization</h1>
        <Typed
            className="typed-text"
            strings={["Mobile Development", "Web Development", "Search Engine Optimization"]}
            typeSpeed={40}
            backSpeed={60}
            loop
        />
        {/* <Link to="contact" offset={-58} className="btn-main-offer" href="#">Contact me</Link> */}
      </div>
  </div> );
};

export default Header;