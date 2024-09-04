import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import JobSearcher from "../images/JobSearcher.png";
import SplitLanding from "../images/SplitLanding.png";
import BackgroundSlider from "../images/BackgroundSlider.png";
import DoubleVerticalSlider from "../images/DoubleVerticalSlider.png";
import ExpandingCards from "../images/ExpandingCards.png";
import Clock from "../images/Clock.png";
import Blurry from "../images/Blurry.jpg";
import RotatingNav from "../images/RotatingNav.png";
import taskManager from "../images/task-manager.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="Netflix Clone Project..."
        />
        <div class="clear"></div>
        <p id="p-portfolio">
          This is a clone of netflix, made with the aim of studying the
          development of front-end interfaces.
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Fernando9200/Netflix-System")
            }
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() => window.open("https://netflix-system.netlify.app/")}
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={cityGuide}
          alt="City Guide App Project..."
        />
        <div class="clear"></div>
        <p id="p-portfolio">
          This is an application that aims to show the current price of various
          cryptocurrencies, made using flutter.
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Fernando9200/CryptoApp")
            }
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.carretto.CryptoApp"
              )
            }
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide App project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="Portfolio Project..."
        />
        <div class="clear"></div>
        <p id="p-portfolio">
          This project is a simplified version of the SpaceX website, using
          their API to get the data.
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Fernando9200/SpaceX")
            }
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() => window.open("https://new-spacex.netlify.app/")}
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Poftfolio React and Material UI project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={taskManager}
          alt="Task Manager React and Redux Project..."
        />
        <div class="clear"></div>
        <p id="p-portfolio">
          This is a front-end project that shows the details of the horror-drama
          series Penny Dreadful
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Fernando9200/Dreadful-Details")
            }
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() => window.open("https://dreadful-details.netlify.app/")}
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: false,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxRotatingNav = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={RotatingNav}
          alt="RotatingNav..."
        />
        <div class="clear"></div>
        <p id="p-portfolio">
          This is a project of a navigation menu for a blog or website that
          rotates the entire web application.
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Fernando9200/rotating-nav")
            }
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://rotating-nav-menu.netlify.app/")
            }
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigRotatingNav = {
    titleBar: {
      enable: false,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxBlurry = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={Blurry}
          alt="Blurry..."
        />
        <div class="clear"></div>
        <p id="p-portfolio">
          This is the project of a personal website that emulates a terminal.
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Fernando9200/TerminalPage")
            }
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://terminal-personal-website.netlify.app/")
            }
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigBlurry = {
    titleBar: {
      enable: false,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxJobSearcher = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={JobSearcher}
          alt="Job Searcher..."
        />
        <div class="clear"></div>
        <p id="p-portfolio">
          This is the project of an front-end design for a website that promotes
          IT positions available.
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Fernando9200/Job-Searcher")
            }
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://job-searcher-front.netlify.app/")
            }
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigJobSearcher = {
    titleBar: {
      enable: false,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxClock = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Clock} alt="Clock..." />
        <div class="clear"></div>
        <p id="p-portfolio">
          This is a simple project of a website that shows a clock with the
          current date and time.
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() => window.open("https://github.com/Fernando9200/Clock")}
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() => window.open("https://simplest-clock.netlify.app/")}
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigClock = {
    titleBar: {
      enable: false,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openSplitLanding = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={SplitLanding}
          alt="SplitLanding..."
        />
        <div class="clear"></div>
        <p id="p-portfolio">
          This is a project of a split landing page for a website made to buy a
          console.
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Fernando9200/split-landing")
            }
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() => window.open("https://split-play5-xbox.netlify.app/")}
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxSplitLanding = {
    titleBar: {
      enable: false,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openBackgroundSlider = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={BackgroundSlider}
          alt="BackgroundSlider..."
        />
        <div class="clear"></div>
        <p id="p-portfolio">
          This is a project of a website where the background and the image
          changes together.
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Fernando9200/background-slider")
            }
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://background-slider-images.netlify.app/")
            }
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxBackgroundSlider = {
    titleBar: {
      enable: false,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openDoubleVerticalSlider = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={DoubleVerticalSlider}
          alt="DoubleVerticalSlider..."
        />
        <div class="clear"></div>
        <p id="p-portfolio">
          This is the project of a page with a slider that changes the theme of
          the website when clicked.
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open(
                "https://github.com/Fernando9200/double-vertical-slider"
              )
            }
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://double-vertical-slider-images.netlify.app/")
            }
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxDoubleVerticalSlider = {
    titleBar: {
      enable: false,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openExpandingCards = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ExpandingCards}
          alt="ExpandingCards..."
        />
        <div class="clear"></div>
        <p id="p-portfolio">
          This is a project of a ToDo List App that is used to register
          day-to-day tasks.
        </p>
        <div id="div-buttons" style={{ display: "inline" }}>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Fernando9200/ToDoApp")
            }
          >
            Github
          </button>
          <button
            id="button-portfolio"
            className="hyper-link"
            onClick={() =>
              window.open("https://things-to-do-list-website.netlify.app/")
            }
          >
            Website
          </button>
        </div>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxExpandingCards = {
    titleBar: {
      enable: false,
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto">
          <div
            className="portfolio-image-box col"
            onClick={openPopupboxNetflix}
          >
            <img
              className="portfolio-image"
              src={netflix}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box col"
            onClick={openPopupboxCityGuide}
          >
            <img
              className="portfolio-image"
              src={cityGuide}
              alt="City Guide Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box col"
            onClick={openPopupboxPortfolio}
          >
            <img
              className="portfolio-image"
              src={portfolio}
              alt="Portfolio React and Material UI Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box col"
            onClick={openPopupboxTaskManager}
          >
            <img
              className="portfolio-image"
              src={taskManager}
              alt="Task Manager React and Redux Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box col"
            onClick={openPopupboxJobSearcher}
          >
            <img
              className="portfolio-image"
              src={JobSearcher}
              alt="Job Searcher Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box col" onClick={openPopupboxClock}>
            <img
              className="portfolio-image"
              src={Clock}
              alt="Clock Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box col"
            onClick={openPopupboxRotatingNav}
          >
            <img
              className="portfolio-image"
              src={RotatingNav}
              alt="Portfolio React and Material UI Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box col" onClick={openPopupboxBlurry}>
            <img
              className="portfolio-image"
              src={Blurry}
              alt="Blurry Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box col" onClick={openSplitLanding}>
            <img
              className="portfolio-image"
              src={SplitLanding}
              alt="Split Landing Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box col"
            onClick={openBackgroundSlider}
          >
            <img
              className="portfolio-image"
              src={BackgroundSlider}
              alt="Background Slider Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box col"
            onClick={openDoubleVerticalSlider}
          >
            <img
              className="portfolio-image"
              src={DoubleVerticalSlider}
              alt="Double Vertical Slider..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box col" onClick={openExpandingCards}>
            <img
              className="portfolio-image"
              src={ExpandingCards}
              alt="Expanding Cards..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
      <PopupboxContainer {...popupboxConfigJobSearcher} />
      <PopupboxContainer {...popupboxConfigClock} />
      <PopupboxContainer {...popupboxConfigRotatingNav} />
      <PopupboxContainer {...popupboxConfigBlurry} />
    </div>
  );
};

export default Portfolio;
