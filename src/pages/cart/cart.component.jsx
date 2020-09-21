import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Button, Popup } from 'semantic-ui-react'
import './cart.styles.css'
import BillingInput from '../../component/billingInputComponent/billingInput.component'

const Cart = () => {
  const history = useHistory()
  const [cartItemsArray, setCartItemsArray] = useState([])
  const [totalAmount, price] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [state, setState] = useState('')
  const [orderIdArray, setOrderIdArray] = useState([])

  const redirectToHome = () => {
    history.push({
      pathname: `/`,
    })
  }

  const apiCall = () => {
    axios.get('http://localhost:8080/user/cart/item').then((response) => {
      setCartItemsArray(response.data.cartItemsDto)
      price(response.data.totalAmount)
    })
  }

  const submitOrders = (event) => {
    event.preventDefault()
    const allOrderIds = []
    for (let i = 0; i < cartItemsArray.length; i++) {
      allOrderIds.push(cartItemsArray[i].orderId)
    }

    const checkoutData = {
      fullName,
      email,
      address,
      city,
      state,
      pinCode,
      orderId: allOrderIds,
    }

    axios
      .put('http://localhost:8080/user/cart/checkout', checkoutData)
      .then((response) => {
        history.push({
          pathname: `/orders`,
        })
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
                      alt="veg"
                    />
                    {cartItems.foodName}
                  </div>
                  <div className="button-container">
                    <Popup
                      size="small"
                      content="remove item"
                      trigger={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <Button
                          className="remove-button"
                          circular
                          icon="trash"
                          size="mini"
                          inverted
                          color="red"
                          onClick={() => removeToCart(cartItems.orderId)}
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
            <form onSubmit={submitOrders} className="form-details">
              <BillingInput
                type="text"
                label="FullName"
                name="fullName"
                value={fullName}
                placeholder="Full Name"
                onChange={(event) => setFullName(event.target.value)}
              />
              <BillingInput
                type="email"
                label="Email"
                name="email"
                value={email}
                placeholder="john@example.com"
                onChange={(event) => setEmail(event.target.value)}
              />
              <BillingInput
                type="text"
                label="Address"
                name="address"
                value={address}
                placeholder="no 35 road"
                onChange={(event) => setAddress(event.target.value)}
              />
              <BillingInput
                type="text"
                label="City"
                name="city"
                value={city}
                placeholder="Bangalore"
                onChange={(event) => setCity(event.target.value)}
              />
              <BillingInput
                type="number"
                label="PinCode"
                name="pinCode"
                value={pinCode}
                placeholder="560024"
                onChange={(event) => setPinCode(event.target.value)}
              />
              <BillingInput
                type="text"
                label="State"
                name="state"
                value={state}
                placeholder="Karnataka"
                onChange={(event) => setState(event.target.value)}
              />
              <label className="checkbox">
                <input type="checkbox" checked />
                Shipping address same as billing
              </label>
              <button className="form-button" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="not-found">
        <div>No items added to cart</div>
        <button type="button" className="order-now" onClick={redirectToHome}>
          Order now
        </button>
      </div>
    </>
  )
}

export default Cart
