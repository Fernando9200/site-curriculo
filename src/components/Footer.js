import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

function Footer() {
  return ( 
  <div className="footer">
      <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="d-flex">
                    <p>rua guruçá</p>
                </div>
                <div className="d-flex">
                    <a href="tel: 555-555-555">+7(960)555-5555</a>
                </div>
                <div className="d-flex">
                    <p>fernando91.sosa@hotmail.com</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-6">
                <div className="row">
                    <div className="col">
                        <a className="footer-nav">Home</a>
                        <br></br>
                        <a className="footer-nav">About me</a>
                        <br></br>
                        <a className="footer-nav">Services</a>
                    </div>
                    <div className="col">
                        <a className="footer-nav">Experience</a>
                        <br></br>
                        <a className="footer-nav">Education</a>
                        <br></br>
                        <a className="footer-nav">Contacts</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                <div className="d-flex justify-content-center">
                    <FacebookShareButton
                    url={"url qualquer"}
                    quote={"Fullstack Developer"}
                    >
                      <FacebookIcon className="mx-3" size={36}/>
                    </FacebookShareButton>
                </div>
                <p className="pt-3 text-center">
                  Copyright&copy;
                  {new Date().getFullYear()}&nbsp;Fernando Carretto
                </p>
            </div>
        </div>
      </div>
  </div> );
}

export default Footer;
