import { FaRegPlayCircle } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import hero_image from "../assets/img/hero-image.jpg";
import dumble from "../assets/img/dumble.png";
import "./hero.scss";
const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero-wrap">
          <div className="hero-content">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              Exercise is the key of <span className="highlights">healthy</span>{" "}
              life style.
            </h2>
            <p>
              Physical exercise means the movement of our body in a systematic
              way. It is not possible to keep good health and mental soundness
              without taking some form of physical exercise.
            </p>
            <div className="hero-btns">
              <button className="register-btn">Register</button>

              <button className="watch-btn">
                <div className="watch-btn-style">
                  <FaRegPlayCircle size={15} />
                  <span className="watch-btn-name">Watch Video</span>
                </div>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <div className="box-1">
                <div className="box-2">
                  <div className="box-3">
                    <div className="box-image">
                      <img src={hero_image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="heart-rate"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h5>Heart Rate</h5>
                <AiFillHeart color="red" />
                <p>BPM 2267</p>
              </div>
              <div
                className="gym-location"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="location-btn">
                  <MdLocationPin size={30} />
                </div>

                <p>Find a gym near your loaction</p>
              </div>
              <div
                className="dumble-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={dumble} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
