import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <Link to={'/'}>
      <img src={require('@images/logo.svg')} id="tpb-logoi" alt="logo1"/>
    </Link>
    <nav>
      subreddit
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
