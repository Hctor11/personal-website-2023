import "./Styles/TitleCard.css";
import SliderLogo from "./SliderLogo";
import Gallery from "./Gallery";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

const TitleCard = () => {
  return (
    <div className="title-card">
      <h1 className="main-title">Hi, I'm Hector Rivera</h1>
      <p className="main-desc">
        // Developer and Designer based in El Salvador.
      </p>

      <div className="about">
        <h3 className="main-title">// About me</h3>
        <p>
          My name is Hector Rivera, and I am thrilled to share with you my story
          as a resident of the beautiful country of El Salvador, and my love for
          programming, graphic design, and interface design.
        </p>
        <p>
          Growing up surrounded by the breathtaking landscapes and vibrant
          culture of El Salvador, I have developed a keen eye for beauty and an
          appreciation for the intricacies of design. It is within this rich
          environment that my creativity has flourished. Through programming, I
          have discovered the power of algorithms, unlocking endless
          possibilities and crafting solutions to real-world problems.
        </p>
        <p>
          Additionally, I am drawn to the world of interface design, where I
          embrace the challenge of crafting seamless user experiences. The art
          of interface design allows me to blend aesthetics with functionality,
          ensuring that every interaction with a digital product or application
          is intuitive, visually appealing, and enhances the user's overall experience.
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
