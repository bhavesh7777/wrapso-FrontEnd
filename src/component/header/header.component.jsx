import React from 'react'
import './header.component.css'

const Header = () => (
  <header className="header">
    <nav className="header__navigation">
      <div></div>
      <div className="header__logo">
        <a href="#menu">WRAPSO</a>
      </div>
      <div className="spacer" />
      <div className="header__navigation-items">
        <ul>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#orders">Orders</a>
          </li>
          <li>
            <a href="#cart">Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header
