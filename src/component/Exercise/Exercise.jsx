import React from "react";
import "./exercise.scss";
import lungs from "../../assets/img/lunges.png";
import extended from "../../assets/img/extended.png";
import yoga from "../../assets/img/yoga-pose.png";

const Exercise = () => {
  return (
    <section id="exercise" data-aos="fade-up" data-aos-duration="1500">
      <div
        className="container exercise-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className="exercise-top"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Benifits of <span>Exercise</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            <br />
            quidem eum nobis repellat, minima vel quo autem commodi dolorem
            fugit!
          </p>
        </div>
        <div className="exercise-wrapper">
          <div className="exercise-list">
            <div
              className="exercise-item"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span>
                <img src={lungs} alt="" />
              </span>
              <div className="exercise-content">
                <h4>Healthy Life</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere tempore eius amet minima?
                </p>
              </div>
            </div>
            <div
              className="exercise-item"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <span>
                <img src={extended} alt="" />
              </span>
              <div className="exercise-content">
                <h4>Increase Flexibilty</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere tempore eius amet minima?
                </p>
              </div>
            </div>
            <div
              className="exercise-item"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span>
                <img src={yoga} alt="" />
              </span>
              <div className="exercise-content">
                <h4>Healthy Life</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere tempore eius amet minima?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercise;
