import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="cont-width_0">
      <div className="footer-top">
        <div className="footer-cta">
          <button className="btn-line__ghost">
            <img src={require('@images/icons/slack.svg')} className="btn-icon" alt="slack icno"/>
            Join our Slack
          </button>
          <button className="btn-line__ghost">
            <img src={require('@images/icons/mail.svg')} className="btn-icon" alt="slack icno"/>
            Contact Us
          </button>
        </div>

        <div className="footer-socials">
          <Link to={'/'} className="button-scm">
            <img src={require('@images/icons/fb.svg')} alt="social media logo"/>
          </Link>
          <Link to={'/'} className="button-scm">
            <img src={require('@images/icons/twt.svg')} alt="social media logo"/>
          </Link>
          <Link to={'/'} className="button-scm">
            <img src={require('@images/icons/inst.svg')} alt="social media logo"/>
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="metatext">© {new Date().getFullYear()}. All rights reserved</span>
        <div className="footer-law">
          <Link to={'/'} className="button-text1">
            Privacy Policy
          </Link>
          <Link to={'/'} className="button-text1">
            Terms of use
          </Link>
        </div>
      </div>
    </div>
  </footer>
)



export default Footer
