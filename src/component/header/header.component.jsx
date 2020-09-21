import React from 'react'
import './header.component.css'

const Header = () => (
  <header className="header">
    <nav className="header__navigation">
      <div className="header__logo">
        <a href="/">WRAPSO</a>
      </div>
      <div className="spacer" />
      <div className="header__navigation-items">
        <ul>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/orders">Orders</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/logout">Profile</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header
