import gal1 from "./Assets/gal1.png";
import gal2 from "./Assets/gal2.png";
import gal3 from "./Assets/gal3.png";
import './Gallery/gallery.css'

const Gallery = () => {
  return (
    <div className="gallery">

      <div className="gal1" style={{
        backgroundImage: `url(${gal1})`
      }}>
        <a href="https://www.behance.net/gallery/174574421/Sputnik" target="_blank" className="link">
                # Sputnik
            </a>
      </div>
      <div className="bottom-container">
        <div 
            className="gal2" style={{
                backgroundImage: `url(${gal2})`
            }}
        >
            <a href="https://dribbble.com/shots/20799312-Antares-Design-Studio-header-page" target="_blank" className="link">
                # Antares
            </a>
        </div>
        <div className="gal3" style={{
        backgroundImage: `url(${gal3})`
      }}>
        <a href="https://dribbble.com/shots/21773263-Tech-eCommerce-Landing-page" target="_blank" className="link">
                # tech-commerce
            </a>
      </div>
      </div>
    
    </div>
  );
};

export default Gallery;
