import React from "react"
import "../styles/global.css"

import Header from "./header"
import Footer from "./footer"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "& body": {
      background: "white",
      lineHeight: 1.5,
      fontSize: "0.875rem",
      marginTop: "5rem",
    },
  },
}))

const Layout = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
