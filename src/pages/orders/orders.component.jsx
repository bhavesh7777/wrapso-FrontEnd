import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './orders.styles.css'

const Orders = () => {
  const [orderItemsArray, setOrderItemsArray] = useState([])
  const history = useHistory()
  const redirectToHome = () => {
    history.push({
      pathname: `/`,
    })
  }
  const apiCall = () => {
    axios.get('http://localhost:8080/user/orders').then((response) => {
      console.log(response.data)
      setOrderItemsArray(response.data)
    })
  }
  useEffect(() => {
    if (orderItemsArray.length === 0) {
      apiCall()
    }
  }, [])
  if (orderItemsArray.length !== 0) {
    return (
      <>
        <div className="cart-container">
          <div className="main-title"> My Orders </div>
          {orderItemsArray &&
            orderItemsArray.map((orderItems) => (
              <div className="item-details">
                <div className="item-name-button">
                  <div className="food-name">
                    <img
                      className="veg-image"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png"
                      alt="veg"
                    />
                    {orderItems.foodItemId.foodName}
                  </div>
                </div>
                <div>₹ {orderItems.foodItemId.amount}</div>
              </div>
            ))}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="not-found">
        <div>No Orders found</div>
        <button type="button" className="order-now" onClick={redirectToHome}>
          Order now
        </button>
      </div>
    </>
  )
}

export default Orders
