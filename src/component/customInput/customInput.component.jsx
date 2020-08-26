import React, { Component } from 'react'
import './customInput.styles.css'

export default class CustomInput extends Component {
  render() {
    const { name, handleChange, placeholder, value } = this.props
    return (
      <input
        name={name}
        onChange={handleChange}
        className="custom-input"
        placeholder={placeholder}
        value={value}
      />
    )
  }
}
