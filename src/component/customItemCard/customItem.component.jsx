import React from 'react'
import axios from 'axios'
import './customitemCard.styles.css'

const CustomItemCard = ({
  foodName,
  foodDescription,
  foodPrice,
  imageUrl,
  foodId,
}) => {
  const addToCart = () => {
    axios.post(`http://localhost:8080/user/cart/item/${foodId}`)
  }
  return (
    <div className="card">
      <img className="image" src={imageUrl} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{foodName}</b>
        </h4>
        <div className="description-container">{foodDescription}</div>
        <div className="price-section">
          <div className="price">{foodPrice}</div>
          <div>
            <button className="card-button" type="button" onClick={addToCart}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CustomItemCard
