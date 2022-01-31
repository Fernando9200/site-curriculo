import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contacts = () => {


        const serviceID = "service_ID";
        const templateID = "template_ID";
        const userID = "user_JgIyCtEn6ajjETt0DH7Sy";

        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(serviceID, templateID, form.current, userID )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };



  return ( 
  <div id="contact" className="contacts">
    <div className="text-center">
        <h1>contact me</h1>
        <p>fodase fodase fodase fodase fodase fodase fodase fodase fodase</p>
    </div>
    <div className="container">
        <form ref={form} onSubmit={sendEmail}>
        <div className="row">
            <div className="col-md-6 col-xs-12">
                {/*NAME INPUT*/}
                <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                ></input>
            <div className="line"></div>
                {/*EMAIL INPUT*/}
                <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                ></input>
            <div className="line"></div>
                {/*SUBJECT INPUT*/}
                <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                ></input>
            <div className="line"></div>
            </div>
            <div className="col-md-6 col-xs-12">
                {/*DESCRIPTION*/}
                <textarea
                type="text"
                className="form-control"
                placeholder="escreve aí a porra do texto"
                name="description"
                ></textarea>
                <div className="line"></div>
                <button value="Send" className="btn-main-offer contact-btn" type="submit">contact me</button>
            </div>
        </div>
        </form>
    </div>
  </div> );
};

export default Contacts;
