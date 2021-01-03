import React from "react"
import { Link } from "gatsby"

import logo from "../assets/logo_transparent_background.png"

const Logo = () => {
  return (
    <Link
      to="/"
      className="logo-container"
      data-sal="slide-right"
      data-sal-delay="100"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <img src={logo} className="logo" alt="logo"></img>
    </Link>
  )
}

export default Logo
