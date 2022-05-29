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
            In addition to my graduation in physics at UFES, I recently started
            the Systems Analysis and Development course at Estácio de Sá
            University. I have also taken several web development courses on
            Udemy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
