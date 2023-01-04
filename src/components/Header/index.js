// Write your JS code here

import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <nav>
      <img
        className="website-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />

      <ul>
        <li>
          <Link className="home" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="products" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="cart" to="/cart">
            Cart
          </Link>
        </li>
        <button className="button" type="button">
          Logout
        </button>
      </ul>
    </nav>
  </div>
)

export default Header
