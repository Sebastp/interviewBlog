import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const ButtonColor = ({ children, url }) => (
  <div className="colorBtn__blue">
    <Link to={'/'+url} className="colorBtn-inner">
      {children}
    </Link>
  </div>
)


ButtonColor.propTypes = {
  url: PropTypes.string.isRequired,
}

export default ButtonColor
