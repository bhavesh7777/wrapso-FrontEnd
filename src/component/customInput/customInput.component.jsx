import React from 'react'
import './customInput.styles.css'

const CustomInput = ({ name, handleChange, placeholder, value }) => (
  <input
    name={name}
    onChange={handleChange}
    className="custom-input"
    placeholder={placeholder}
    value={value}
    required
  />
)

export default CustomInput
