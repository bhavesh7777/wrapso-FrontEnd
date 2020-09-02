import React from 'react'
import './customButton.styles.css'

const CustomButton = ({ isSendOtpButton, buttonText }) => (
  <button
    type="button"
    className={`custom-button ${isSendOtpButton ? 'send-otp-button' : ''} `}
  >
    {buttonText}
  </button>
)

export default CustomButton
