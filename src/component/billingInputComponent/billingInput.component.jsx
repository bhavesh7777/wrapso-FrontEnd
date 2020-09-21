import React from 'react'

const BillingInput = ({ label, value, placeholder, onChange, name, type }) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </>
  )
}
export default BillingInput
