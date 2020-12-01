import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    width: "100%",
    padding: "1rem",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Typography variant="subtitle2">
        © 2020 David Fisher | Software Developer | London | Personal Portfolio |
        Built with Gatsby.js
      </Typography>
    </footer>
  )
}

export default Footer
