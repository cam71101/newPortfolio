import React from "react"

import "../styles/global.css"
import Footer from "./Footer"
import Header from "./Header"

const Layout = props => {
  return (
    <div className="layout">
      <Header logo={props.logoFixed} />
      {props.children}
      <Footer logo={props.logoFixed} />
    </div>
  )
}

export default Layout
