import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Underline from "./Underline"

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: "1rem",
    textAlign: "center",
  },
}))

const Title = ({ title, size }) => {
  const classes = useStyles()
  return (
    <div className={classes.title}>
      <Typography variant={size ? size : "h2"}>
        {title || "default title"}
      </Typography>
      <Underline />
    </div>
  )
}

export default Title
