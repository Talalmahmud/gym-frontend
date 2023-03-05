import "./start.scss";
import trainer from "../../assets/img/trainer.jpeg";
const Start = () => {
  return (
    <section>
      <div className="container">
        <div className="start-wrapper">
          <div
            className="start-image"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={trainer} alt="" />
          </div>
          <div
            className="start-content"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2>Ready to make a change</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              rerum fugit earum tempore maxime animi consequatur reprehenderit
              ipsum deleniti, quae expedita, qui atque fugiat voluptas hic velit
              quibusdam mollitia error.
            </p>
            <button className="register-btn">Register</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
