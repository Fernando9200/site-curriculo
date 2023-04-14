import React from "react";
import livros from "../PBooks8.jpg";

const Education = () => {
  return (
    <div id="education" className="py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img2" src={livros} alt="author..."></img>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Education</h1>
          <p
            style={{
              textAlign: "justify",
              marginRight: "100px",
              marginTop: "25px",
            }}
          >
            I graduated in physics from UFES and have since been actively pursuing my passion for technology. Currently, I am studying towards a Professional Certificate in Computer Science for Web Programming through HarvardX. I have also completed several web development courses on Udemy and Coursera to expand my skill set.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
