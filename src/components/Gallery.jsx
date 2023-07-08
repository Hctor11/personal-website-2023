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

      </div>
      <div className="bottom-container">
        <div className="gal2" style={{
            backgroundImage: `url(${gal2})`
        }}></div>
        <div className="gal3" style={{
        backgroundImage: `url(${gal3})`
      }}></div>
      </div>
    
    </div>
  );
};

export default Gallery;
