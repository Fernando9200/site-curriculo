import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "./avatars/clipart3010693.png";
import avatar2 from "./avatars/avatar-2.png";
import avatar3 from "./avatars/avatar-3.png";
import avatar4 from "./avatars/avatar-4.png";

function TestimonialsCarousel() {
  return ( 
  <Carousel>
      <>
        <img src={avatar1} alt="lol"></img>
    <div className="myCarousel">
        <h3>Bootstrap</h3>
    </div>
      </>
      <>
        <img src={avatar2} alt="lol"></img>
    <div className="myCarousel">
        <h3>React</h3>
    </div>
      </>
      <>
        <img src={avatar3} alt="lol"></img>
    <div className="myCarousel">
        <h3>Django</h3>
    </div>
      </>
      <>
        <img src={avatar4} alt="lol"></img>
    <div className="myCarousel">
        <h3>Flutter</h3>
    </div>
      </>
  </Carousel> );
}

export default TestimonialsCarousel;
