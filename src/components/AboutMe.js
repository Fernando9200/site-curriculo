import React from "react";
import author from "../Foto-perfil.jpg";

const AboutMe = () => {
  return (
  <div id="about" className="py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
                <img className="profile-img" src={author} alt="author..."></img>
            </div>
        </div>
        <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">about me</h1>
            <p style={{textAlign: 'justify', marginRight: '100px', marginTop: '25px'}}>
            In 2016 I started my degree in physics at the Federal University of Espírito Santo (UFES), dreaming of becoming a researcher. However, when I studied programming for the first time during one of the course subjects, I ended up falling in love with IT and decided that this was my true vocation. Since then, I have been looking to learn and train myself more and more.
            </p>
        </div>
      </div>
  </div>);
};

export default AboutMe;
