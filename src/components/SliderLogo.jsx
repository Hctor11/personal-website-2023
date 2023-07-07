import img from './Slider/Slider.svg'
import './Slider/Slider.css'

const SliderLogo = () => {
  return (
    <div className="slider-container">
        <div className="slider">
          <img src={img} alt="e"/>
          <img src={img} alt="e"/>
        </div>
    </div>
  )
}

export default SliderLogo