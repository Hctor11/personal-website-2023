import behance from "./SocialMediaIcons/bi_behance.svg";
import linkedin from "./SocialMediaIcons/bi_linkedin.svg";
import dribbble from "./SocialMediaIcons/ri_dribbble-line.svg";
import github from "./SocialMediaIcons/uil_github.svg";
import './Social/Social.css'

const SocialMedia = () => {
  return (
    <div className="social">
      <div className="lnkdin social-ico">
      <img src={linkedin} alt="linkedin logo" />
        <a href="#" className="link-social">linkedIn</a>
      </div>
      <div className="dribbble social-ico">
      <img src={dribbble} alt="dribbble logo" />
        <a href="#" className="link-social">Dribbble</a>
      </div>
      <div className="behance social-ico">
      <img src={behance} alt="behance logo" />
        <a href="#" className="link-social">Behance</a>
      </div>
      <div className="github social-ico">
      <img src={github} alt="github logo" />
        <a href="#" className="link-social">GitHub</a>
      </div>
    </div>
  );
};

export default SocialMedia;
