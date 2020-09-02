import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './customSlideShow.styles.css'

const slideImages = [
  'https://www.pngkit.com/png/full/911-9118342_launch-offer-banner.png',
  'https://thepromox.com/wp-content/uploads/2018/04/faasos-50-off-coupon.png',
  'https://thepromox.com/wp-content/uploads/2018/04/faasos-50-off-coupon.png',
]

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }} />
        </div>
      </Slide>
    </div>
  )
}
export default Slideshow
