import "./price.scss";
import { IoIosRadioButtonOn } from "react-icons/io";
const Price = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="price-wrapper">
          <div className="price-top">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              Gym <span>Pricing</span> Plan
            </h2>
            <p>You can see all of our price</p>
          </div>
          <div className="price-bottom">
            <div className="price-card">
              <div
                className="card-top"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2>Regular Member</h2>
                <h4>
                  $50 <span>/month</span>
                </h4>
              </div>
              <div className="card-bottom">
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Unlimited time access in gym</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Cusotmer Support</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Perosnal Trainer</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Standard Options</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>5 clasess per week</p>
                </div>
              </div>
              <div className="card-btn">
                <button className="join-btn">Join Now</button>
              </div>
            </div>
            <div className="price-card">
              <div
                className="card-top"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2>Premium Member</h2>
                <h4>
                  $100 <span>/month</span>
                </h4>
              </div>
              <div className="card-bottom">
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Unlimited time access in gym</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Cusotmer Support</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Perosnal Trainer</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Standard Options</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>5 clasess per week</p>
                </div>
              </div>
              <div className="card-btn">
                <button className="join-btn">Join Now</button>
              </div>
            </div>
            <div className="price-card">
              <div
                className="card-top"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2>Standard Member</h2>
                <h4>
                  $150 <span>/month</span>
                </h4>
              </div>
              <div className="card-bottom">
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Unlimited time access in gym</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Cusotmer Support</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Perosnal Trainer</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>Standard Options</p>
                </div>
                <div className="card-item">
                  <IoIosRadioButtonOn />
                  <p>5 clasess per week</p>
                </div>
              </div>
              <div className="card-btn">
                <button className="join-btn">Join Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
