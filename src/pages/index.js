import React from "react"
import { Link } from "gatsby"

import Layout from "@components/layout"
import Footer from "@components/footer"
import Image from "@components/image"
import SEO from "@components/seo"
import ArticleType1 from "@components/posts/articleType1"

const IndexPage = () => (
  <>
    <SEO title="Home"/>
    <div id="landingTopImage">
      <img src={require('@images/milenialGuy.png')} id="landingTopImage-guy" alt="Milenial Guy"/>
      <img src={require('@images/oninon1.svg')} id="landingTopImage-onion" alt="waves background"/>
    </div>

    <div className="cont-width_0">
      <header>
        <Link to={'/'}>
          <img src={require('@images/logo.svg')} id="tpb-logo" alt="logo"/>
        </Link>
        <div>
          <h2>Inspiring Success stories from
            <span>Startup Founders</span>
          </h2>
        </div>
      </header>

      <div className="landing-main">
        <div className="grid-col-left">

        </div>
        <div className="grid-col-center">
          <ArticleType1/>
        </div>
      </div>
    </div>

    <Footer/>
  </>
)

export default IndexPage
