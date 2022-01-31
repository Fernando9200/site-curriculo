import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

function Testimonials() {
  return ( 
  <div id="testimonials" className="testimonials">
      <h1>Frameworks</h1>
      <div className="container">
          <div className="testimonials-content">
            <TestimonialsCarousel />
          </div>
      </div>
  </div> );
}

export default Testimonials;
