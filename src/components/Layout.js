import React from "react"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import "../styles/global.css"
import Footer from "./Footer"
import Header from "./Header"

const Layout = props => {
  return (
    <PageTransition>
      <div style={{ background: props.colour }} className="layout">
        <Header logo={props.logoFixed} />
        {props.children}
        <Footer logo={props.logoFixed} />
      </div>
    </PageTransition>
  )
}

export default Layout
