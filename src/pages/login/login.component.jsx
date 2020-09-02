import React, { useState, useEffect } from 'react'
import './login.styles.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import CustomButton from '../../component/customButton/customButton.component'
import CustomInput from '../../component/customInput/customInput.component'
import setUserLoginStatus from '../../helperFunctions/setUserLoginStatus'

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOptSent] = useState(false)
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem('loginStatus'),
  )

  const history = useHistory()
  // acts as a event listner to anything that is passed in the dependency array
  useEffect(() => {
    if (loginStatus === 'true') {
      history.push('/')
    }
  }, [loginStatus])

  const handleSubmit = (event) => {
    event.preventDefault()
    //API hit
    console.log(mobileNumber)
    const mobileNumberData = {
      mobileNumber: mobileNumber,
    }
    axios.post('http://localhost:8080/user/otp', mobileNumberData).then(() => {
      setOptSent(true)
    })
  }

  const verifyOtp = (event) => {
    event.preventDefault()
    const optVerificationData = {
      mobileNumber: mobileNumber,
      otp: otp,
    }
    axios
      .put('http://localhost:8080/user/otp', optVerificationData)
      .then(() => {
        setUserLoginStatus('true')
        setLoginStatus('true')
      })
  }

  return (
    <div className="login-container">
      <div className="login-container__box">
        <div className="login-container__box__logo">logo</div>
        <div className="login-container__box__title-text">
          Sign in with Phone number
        </div>
        <div className="login-container__box__form-container">
          {otpSent ? (
            <form onSubmit={verifyOtp} className="otp-form">
              <div className="otp-form__otp-sent-text">
                OTP sent to :{mobileNumber}
              </div>
              <CustomInput
                value={otp}
                name="otp"
                handleChange={(event) => setOtp(event.target.value)}
                placeholder="Enter OTP"
              />
              <CustomButton type="submit" isSendOtpButton buttonText="Verify" />
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="otp-form">
              <CustomInput
                value={mobileNumber}
                name="mobileNumber"
                handleChange={(event) => setMobileNumber(event.target.value)}
                placeholder="Mobile Number"
              />
              <CustomButton
                type="submit"
                isSendOtpButton
                buttonText="Send OTP"
              />
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
