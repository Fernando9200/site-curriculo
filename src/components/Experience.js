import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018</h3>
            <p
              style={{
                textAlign: "justify",
              }}
            >
              I worked as a tutor for Calculus 2 at the{" "}
              <a
                id="experience-link"
                href="https://www.linkedin.com/school/univ-federal-do-espirito-santo/"
              >
                Federal University of Espírito Santo
              </a>
              .
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3
              style={{
                textAlign: "right",
              }}
            >
              2019-2021
            </h3>
            <p
              style={{
                textAlign: "justify",
                // marginLeft: "260px",
              }}
            >
              As a freelancer at{" "}
              <a
                id="experience-link"
                href="https://www.linkedin.com/company/brainly-com/"
              >
                Brainly
              </a>
              , I implemented SEO strategies to optimize their online content.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-2022</h3>
            <p
              style={{
                textAlign: "justify",
                // marginRight: "250px",
              }}
            >
              As a full-stack developer intern at{" "}
              <a
                id="experience-link"
                href="https://www.linkedin.com/company/locus-custom-software/"
              >
                Locus Custom Software
              </a>
              , a Brazilian company, I was responsible for modifying and fixing
              bugs in web applications using Django and mobile applications
              using Flutter.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3
              style={{
                textAlign: "right",
              }}
            >
              2022-2023
            </h3>
            <p
              style={{
                textAlign: "justify",
                // marginLeft: "260px",
              }}
            >
              I am currently employed as a front-end developer at{" "}
              <a
                id="experience-link"
                href="https://www.linkedin.com/company/hahn-softwareentwicklung/mycompany/"
              >
                Hahn Softwareentwicklung GmbH
              </a>
              , a German software company that specializes in custom solutions
              for its clients. In my role, I implement new features and fix bugs
              in web applications using the Vue.js framework as well as
              JavaScript, HTML, and CSS languages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
