import React from "react"
import { Link } from "gatsby"

import Layout from "@components/layout"
import Image from "@components/image"
import SEO from "@components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Link to={'/'}>
      <img src={require('@images/logo.svg')} id="tpb-logoi" alt="logo1"/>
    </Link>
    <div>
      <p>Inspiring Success stories from</p>
      <span>Startup Founders</span>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
