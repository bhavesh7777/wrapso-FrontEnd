import React from 'react'
import './customCategoryCard.styles.css'

const CustomCard = ({ img, imgName, onClick }) => {
  return (
    <div className="custom-card-container" role="button" onClick={onClick}>
      <img className="image" src={img} alt={imgName} />
      <div className="centered">{imgName}</div>
    </div>
  )
}
export default CustomCard
