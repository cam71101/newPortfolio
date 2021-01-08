import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
// import logo from "../assets/logo_transparent_background.png"

const Logo = ({ logo }) => {
  return (
    <Link
      to="/"
      className="logo-container"
      // data-sal="slide-right"
      // data-sal-delay="100"
      // data-sal-easing="ease"
      // data-sal-duration="1000"
    >
      {/* <img src={logo} className="logo" alt="logo"></img> */}
      <Img fixed={logo} className="logo" />
    </Link>
  )
}

export default Logo
