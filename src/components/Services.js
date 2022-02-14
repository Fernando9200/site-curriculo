import React from "react";
import { faGoogle} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Services() {
  return ( 
  <div id="services" className="services">
      <h1 className="py-5">my services</h1>
          <div className="container">
            <div id="container" className="row">
                <div className="col-sm">
                    <div className="box">
       <div className="circle"> <FontAwesomeIcon className="icon" icon={faMobile} size="2x" /> </div>
                        <h3>Mobile Development</h3>
                    </div>
                </div>
                { /* - */}
                <div className="col-sm">
                    <div className="box">
        <div className="circle"> <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /> </div>
                        <h3>Web Development</h3>
                    </div>
                </div>
                { /* - */}
                <div className="col-sm">
                    <div className="box">
        <div className="circle"> <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /> </div>
                        <h3>Search Engine Otimization</h3>
                    </div>
                </div>
            </div>
          </div>
  </div> 
  
  );
}

export default Services;
