import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://www.linkedin.com/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}