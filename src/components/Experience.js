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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec tincidunt erat.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec tincidunt erat. Nulla facilisi. Donec scelerisque massa nec libero luctus, vitae ullamcorper massa posuere. In ac tincidunt.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec tincidunt erat. Nulla facilisi. Donec scelerisque massa nec libero luctus, vitae ullamcorper massa posuere. In ac tincidunt metus, a volutpat turpis. Pellentesque facilisis velit in libero bibendum, nec ultricies odio gravida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
