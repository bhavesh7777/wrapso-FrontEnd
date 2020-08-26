import React, { Component } from 'react'
import './customButton.styles.css'

export default class CustomButton extends Component {
  render() {
    const { isSendOtpButton } = this.props
    return (
      <button
        className={`custom-button ${isSendOtpButton ? 'send-otp-button' : ''} `}
      >
        send otp
      </button>
    )
  }
}
