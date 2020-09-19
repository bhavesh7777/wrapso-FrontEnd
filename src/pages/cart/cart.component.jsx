import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Popup } from 'semantic-ui-react'
import './cart.styles.css'

const Cart = () => {
  const [cartItemsArray, setCartItemsArray] = useState([])
  const [totalAmount, price] = useState()
  const apiCall = () => {
    axios.get('http://localhost:8080/user/cart/item').then((response) => {
      setCartItemsArray(response.data.cartItemsDto)
      price(response.data.totalAmount)
    })
  }
  useEffect(() => {
    if (cartItemsArray.length === 0) {
      apiCall()
    }
  }, [])

  const removeToCart = (orderId) => {
    axios.delete(`http://localhost:8080/user/cart/item/${orderId}`).then(() => {
      window.location.reload()
    })
  }
  if (cartItemsArray.length !== 0) {
    return (
      <>
        <div className="cart-container">
          <div className="main-title">Order Summary</div>
          {cartItemsArray &&
            cartItemsArray.map((cartItems) => (
              <div className="item-details">
                <div className="item-name-button">
                  <div className="food-name">
                    <img
                      className="veg-image"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png"
                    ></img>
                    {cartItems.foodName}
                  </div>
                  <div className="button-container">
                    <Popup
                      size="small"
                      content="remove item"
                      trigger={
                        <Button
                          className="remove-button"
                          onClick={() => removeToCart(cartItems.orderId)}
                          circular
                          icon="trash"
                          size="mini"
                          inverted
                          color="red"
                        />
                      }
                    />
                  </div>
                </div>
                <div>₹ {cartItems.amount}</div>
              </div>
            ))}
          <hr />
          <div className="item-details">
            <div>Total</div>
            <div>₹ {totalAmount}</div>
          </div>
        </div>

        <div className="payment-container">
          <div className="main-title">Billing Address</div>
          <div className="form-container">
            <form onClick="" className="form-details">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="john@example.com"
                required
              />
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="address"
                required
              />
              <label>City</label>
              <input type="text" name="city" placeholder="Bangalore" required />
              <label>PinCode</label>
              <input type="text" name="pincode" placeholder="560024" required />
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="Karnataka"
                required
              />
              <label className="checkbox">
                <input type="checkbox" checked />
                Shipping address same as billing
              </label>
            </form>
            <button className="form-button" type="submit">
              Continue to checkout
            </button>
          </div>
        </div>
      </>
    )
  }
  return <div className="not-found">No items added to cart</div>
}

export default Cart
