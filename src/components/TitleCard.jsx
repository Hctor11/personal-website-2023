import "./Styles/TitleCard.css";
import SliderLogo from "./SliderLogo";
import Gallery from "./Gallery";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

const TitleCard = () => {
  return (
    <div className="title-card">
      <h1 className="main-title">Hi, I'm Hector Rivera</h1>
      <p className="main-desc desc">
        // Developer and Designer based in El Salvador.
      </p>

      <div className="about">
        <h3 className="main-title">// About me</h3>
        <p className="desc">
          My name is Hector Rivera, I am 18 years old and I like a to learn new things. My favorite hobbies are Mathematics, physics, graphics design and generative art.
        </p>
        <p className="desc">
          I am from Acajulta, a tiny city near the beach in El Salvador. I like a lot the warm landscapes and the beautiful ocean. 
        </p>
        <p className="desc">
          I really like to read books about astronomy, spaceships and the aesthetics that involve everything about engineering, so is quite common to see this type of aesthetics and inspiration from my personal proyects.
        </p>
      </div>
      <div className="logo-slide">
      <h3 className="main-title">// Technologies</h3>
      <SliderLogo></SliderLogo>
      </div>
      <div className="selected-works-gallery">
      <h3 className="main-title">// Selected Works</h3>
      <Gallery/>
      </div>
      <div className="contact">
        <h3 className="main-title">// Get in touch</h3>
        <a href="mailto:hectorriverag222@gmail.com" className="contact-button">Click here to contact me</a>
      </div>
      <h3 className="main-title">// Social</h3>
      <SocialMedia/>
      <Footer/>
    </div>
  );
};

export default TitleCard;
