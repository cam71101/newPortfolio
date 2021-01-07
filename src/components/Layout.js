import React from "react"
import "../styles/global.css"

import "fontsource-rubik"
import "fontsource-karla"

import Footer from "./Footer"
import Header from "./Header"

const Layout = props => {
  return (
    <div style={{ background: props.colour }} className="layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
