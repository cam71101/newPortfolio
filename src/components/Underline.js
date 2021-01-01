import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "5rem",
    height: "0.25rem",
    marginBottom: "1.25rem",
    marginLeft: "auto",
    marginRight: "auto",
    background: "linear-gradient(-60deg, #ff0040, #904e95, #e73c7e, #0080ff);",
  },
}))

const Underline = ({ width, height }) => {
  const classes = useStyles()
  return (
    <div
      className={classes.root}
      style={(width && { width: width }, height && { height: height })}
    ></div>
  )
}

export default Underline
