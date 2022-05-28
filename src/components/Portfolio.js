import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
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
        <button
          id="button-portfolio"
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Fernando9200/Netflix-System")
          }
        >
          Github
        </button>
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
        <button
          id="button-portfolio"
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Fernando9200/CryptoApp")
          }
        >
          Github
        </button>
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
        <button
          id="button-portfolio"
          className="hyper-link"
          onClick={() => window.open("https://github.com/Fernando9200/SpaceX")}
        >
          Github
        </button>
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
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://react-redux-task-manager.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://react-redux-task-manager.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/8020Coding/task-manager", "_blank")
          }
        >
          https://github.com/8020Coding/task-manager
        </a>
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
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  );
};

export default Portfolio;
