import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <Link to={'/'}>
      <img src={require('@images/logo.svg')} id="tpb-logoi" alt="logo1"/>
    </Link>
    <nav>
      subreddit
    </nav>
    <span>© {new Date().getFullYear()} name</span>
  </footer>
)



export default Footer
