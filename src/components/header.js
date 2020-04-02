import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import navStyle from '../styles/navStyle.module.css';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#92c5eb`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <nav className={navStyle.nav}>
        <ul className={navStyle.navUL}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page-2">Page2</Link></li>
          <li><Link to="/posts">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}





export default Header
