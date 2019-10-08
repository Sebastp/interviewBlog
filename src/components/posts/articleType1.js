import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import ButtonColor from "@components/buttonColor"


const ArticleType1 = ({ kicker, title, subtitle, createdData, readTime, keywords, tag }) => (
  <article className="post-article1">
    <span className="post-kicker">
      {kicker}
    </span>
    <h2 className="post-title">
      {title}
    </h2>
    <p className="post-subtitle">
      {subtitle}
    </p>

    <div className="post-footer">
      <div className="post-captions">
        {readTime} min read
        <span className="middotDivider"/>
        {createdData}
      </div>

      <div className="post-tag">
        <ButtonColor>
          {tag}
        </ButtonColor>
      </div>
    </div>
  </article>
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
