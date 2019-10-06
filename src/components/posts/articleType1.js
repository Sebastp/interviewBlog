import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ArticleType1 = ({ title }) => (
  <div>
    {title}
  </div>
)

ArticleType1.propTypes = {
  title: PropTypes.string,
}

ArticleType1.defaultProps = {
  title: `Article Title`,
}

export default ArticleType1
