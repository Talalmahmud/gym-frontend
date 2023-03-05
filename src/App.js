import "./App.scss";
import Exercise from "./component/Exercise/Exercise";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Price from "./component/Price/Price";
import Start from "./component/Start/Start";
import Testimonial from "./component/Testimonial/Testimonial";
import Hero from "./UI/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Exercise />
      <Start />
      <Price />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
