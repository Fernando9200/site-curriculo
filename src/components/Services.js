import React from "react";
import { faFacebookF, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'

function Services() {
  return ( 
  <div id="services" className="services">
      <h1 className="py-5">my services</h1>
          <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="box">
       <div className="circle"> <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /> </div>
                        <h3>Mobile Development</h3>
                        <p>fodase fodase fodase fodase fodase</p>
                    </div>
                </div>
                { /* - */}
                <div className="col-md-3 col-sm-6">
                    <div className="box">
        <div className="circle"> <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /> </div>
                        <h3>Web Development</h3>
                        <p>fodase fodase fodase fodase fodase</p>
                    </div>
                </div>
                { /* - */}
                {/* <div className="col-md-3 col-sm-6">
                    <div className="box">
        <div className="circle"> <FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /> </div>
                        <h3>Facebook ADS SMM</h3>
                        <p>fodase fodase fodase fodase fodase</p>
                    </div>
                </div> */}
                { /* - */}
                <div className="col-md-3 col-sm-6">
                    <div className="box">
        <div className="circle"> <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /> </div>
                        <h3>Search Engine Otimization</h3>
                        <p>fodase fodase fodase fodase fodase</p>
                    </div>
                </div>
            </div>
          </div>
  </div> 
  
  );
}

export default Services;
