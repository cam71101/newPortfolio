import React from "react"
import Logo from "./Logo"
import Button from "@material-ui/core/Button"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"

import "../styles/global.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-contact">
        <div className="footer-touch">
          <Button href={"mailto:david@d-fisher.com"}>
            <h2>Get In Touch &nbsp;</h2>

            <EmailIcon fontSize="large" />
          </Button>
        </div>
        <p>
          Feel free to contact me. I'm available for work and open to questions
          and suggestions.
        </p>
      </div>

      <div className="footer-links">
        <Logo />
        <Button href={"https://github.com/cam71101"} target="_blank">
          <GitHubIcon fontSize="large" />
        </Button>
        <Button
          href={"https://www.linkedin.com/in/davidlfisher/"}
          target="_blank"
        >
          <LinkedInIcon fontSize="large" />
        </Button>
        <Button href="https://twitter.com/d_fisherWebDev" target="_blank">
          <TwitterIcon fontSize="large" />
        </Button>
      </div>
    </footer>
  )
}

export default Footer
