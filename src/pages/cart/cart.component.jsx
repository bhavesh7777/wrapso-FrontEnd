import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './cart.styles.css'

const Cart = () => {
  const [cartItemsArray, setCartItemsArray] = useState([])
  const apiCall = () => {
    axios.get('http://localhost:8080/user/cart/item').then((response) => {
      setCartItemsArray(response.data)
    })
  }
  useEffect(() => {
    if (cartItemsArray.length === 0) {
      apiCall()
    }
  }, [])

  const removeToCart = (orderId) => {
    axios
      .delete(`http://localhost:8080/user/cart/item/${orderId}`)
      .then((response) => {
        window.location.reload()
      })
  }
  if (cartItemsArray.length !== 0) {
    return (
      <div className="cart-container">
        <h4>Order Summary</h4>
        {cartItemsArray &&
          cartItemsArray.map((cartItems) => (
            <div className="item-details">
              <div className="item-name-button">
                <div>{cartItems.foodName}</div>
                <button
                  className="remove-button"
                  type="button"
                  onClick={() => removeToCart(cartItems.orderId)}
                >
                  remove
                </button>
              </div>
              <div>₹ {cartItems.amount}</div>
            </div>
          ))}
      </div>
    )
  }
  return <div>loading...</div>
}

export default Cart
