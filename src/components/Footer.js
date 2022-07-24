import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex"></div>
            <div className="d-flex">
              <a href="tel: (27) 9-9819-2780">+55 (27) 9-9819-2780</a>
            </div>
            <div className="d-flex">
              <p>fernando91.sosa@hotmail.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br></br>
                <a className="footer-nav">About</a>
              </div>
              <div className="col">
                <a className="footer-nav">Services</a>
                <br></br>
                <a className="footer-nav">Education</a>
                <br></br>
              </div>
              <div className="col">
                <a className="footer-nav">Stacks</a>
                <br></br>
                <a className="footer-nav">Experience</a>
                <br></br>
              </div>
              <div className="col">
                <a className="footer-nav">Portfolio</a>
                <br></br>
                <a className="footer-nav">Contact</a>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.workana.com/freelancer/0e4ed7aa5719ac3e8e4835b4dd4a9c92")
                }
                class="btn btn-dark btn-lg"
                type="button"
              >
                Workana
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/fernando-carretto/")
                }
                class="btn btn-dark btn-lg"
                type="button"
              >
                LinkedIn
              </button>
              <button
                onClick={() =>
                  (window.location.href = "https://github.com/Fernando9200")
                }
                class="btn btn-dark btn-lg"
                type="button"
              >
                GitHub
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
