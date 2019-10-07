import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ArticleType1 = ({ kicker, title, subtitle, createdData, readTime, keywords, tag }) => (
  <div className="post-article1">
    <span className="post-kicker">
      {kicker}
    </span>
    <h4 className="post-title">
      {title}
    </h4>
    <p className="post-subtitle">
      {title}
    </p>

    <div className="post-footer">
      <div className="post-captions">
        {readTime} min read
        <span className="middotDivider"/>
        {createdData}
      </div>

      <div className="post-tag">
        <Link className="colorBtn colorBtn__blue">
          {tag}
        </Link>
      </div>
    </div>
  </div>
)

ArticleType1.propTypes = {
  kicker: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  createdData: PropTypes.string,
  readTime: PropTypes.number,
  keywords: PropTypes.array,
  tag: PropTypes.string
}

ArticleType1.defaultProps = {
  kicker: 'Kyle Eschenroeder',
  title: `How to Make (and Lose) $2,000,000 Day Trading: The System & The Story`,
  subtitle: 'I’ve tried and failed to write this article ten times.',
  createdData: 'Sep 3 2019',
  readTime: '15',
  keywords: '',
  tag: 'Trading'
}

export default ArticleType1
