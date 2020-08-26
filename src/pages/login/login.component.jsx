import React, { Component } from 'react'
import './login.styles.css'
import CustomButton from '../../component/customButton/customButton.component'
import CustomInput from '../../component/customInput/customInput.component'
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileNumber: '',
      otp: '',
      otpSent: false,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //API hit
    console.log(this.state.mobileNumber)
    const mobileNumberData = {
      mobileNumber: this.state.mobileNumber,
    }
    axios
      .post('http://localhost:8080/user/send-otp', mobileNumberData)
      .then(() => {
        this.setState({
          otpSent: true,
        })
      })

    console.log(this.state)
  }

  handleChange = (event) => {
    console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { otpSent } = this.state
    return (
      <div className="login-container">
        <div className="login-container__box">
          <div className="login-container__box__logo">logo</div>
          <div className="login-container__box__title-text">
            Sign in with Phone number
          </div>
          <div className="login-container__box__form-container">
            {otpSent ? (
              <form onSubmit={this.handleSubmit} className="otp-form">
                <CustomInput
                  value={this.state.otp}
                  name="otp"
                  handleChange={this.handleChange}
                  placeholder="OTP"
                />
                <CustomButton type="submit" isSendOtpButton />
              </form>
            ) : (
              <form onSubmit={this.handleSubmit} className="otp-form">
                <CustomInput
                  value={this.state.mobileNumber}
                  name="mobileNumber"
                  handleChange={this.handleChange}
                  placeholder="Mobile Number"
                />
                <CustomButton type="submit" isSendOtpButton />
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }
}
