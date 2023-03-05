import "./testimonial.scss";
import { FcLeft, FcRight } from "react-icons/fc";
import { useState } from "react";
import harry from "../../assets/img/harry.jpg";
import carrry from "../../assets/img/carrry.png";
import robarto from "../../assets/img/robarto.png";

const testmonaialDetails = [
  {
    imgUrl: harry,
    details:
      "This is Harry.This is a nice gym. I get all facilities which are essential for me. The trainers are very friendly. They guide perfectly to fit our body fitness. Thanks ",
  },
  {
    imgUrl: carrry,
    details:
      "I am Carry.This is a nice gym. I get all facilities which are essential for me. The trainers are very friendly. They guide perfectly to fit our body fitness. Thanks ",
  },
  {
    imgUrl: robarto,
    details:
      "It's Robarto.This is a nice gym. I get all facilities which are essential for me. The trainers are very friendly. They guide perfectly to fit our body fitness. Thanks ",
  },
];
const Testimonial = () => {
  const [testimonialcontent, setTestimonialcontent] = useState(
    testmonaialDetails[0]
  );
  const [count, setCount] = useState(0);

  const handleTestimonial = () => {
    if (count >= testmonaialDetails.length - 1) {
      setCount(0);
    } else {
      setCount((count) => count + 1);
    }
    setTestimonialcontent(testmonaialDetails[count]);
  };
  return (
    <section>
      <div className="container">
        <div className="testimonial-wrapper">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Testimonials
          </h2>
          <div
            className="testimonial-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="left-btn">
              <FcLeft
                size={18}
                className="left-btn"
                onClick={() => handleTestimonial()}
              />
            </div>
            <div className="testimonial-content-details">
              <img src={testimonialcontent.imgUrl} alt="" />
              <p>"{testimonialcontent.details}"</p>
            </div>
            <div className="right-btn">
              <FcRight
                size={18}
                color="orange"
                onClick={() => handleTestimonial()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
