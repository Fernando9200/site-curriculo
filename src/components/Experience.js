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
              I acted as a Calculus 2 tutor at{" "}
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
              I worked as a freelancer at{" "}
              <a
                id="experience-link"
                href="https://www.linkedin.com/company/brainly-com/"
              >
                Brainly
              </a>
              , applying improvements in their online content using Search
              Engine Optimization (SEO).
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
              I worked as an intern full-stack developer at a Brazilian company
              called{" "}
              <a
                id="experience-link"
                href="https://www.linkedin.com/company/locus-custom-software/"
              >
                Locus Custom Software
              </a>
              , performing modifications and fixing bugs in web applications
              using Django and mobile applications using Flutter.
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
              2022
            </h3>
            <p
              style={{
                textAlign: "justify",
                // marginLeft: "260px",
              }}
            >
              I currently work as a junior front-end developer at{" "}
              <a
                id="experience-link"
                href="https://www.linkedin.com/company/hahn-softwareentwicklung/mycompany/"
              >
                Hahn Softwareentwicklung GmbH
              </a>
              , a software company from Germany specialized in customized
              solutions for its customers, implementing new features and fixing
              bugs in web applications using the vue.js framework and
              JavaScript, HTML and CSS languages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
