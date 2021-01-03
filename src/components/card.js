import React from "react"

import Layout from "./layout"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

import SEO from "./SEO"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    minHeight: "calc(100vh - 5rem - 9rem)",
    paddingTop: "2rem",
    marginLeft: "10vw",
    maxWidth: "90rem",
    marginRight: "1rem",
    marginBottom: "4rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "4rem",
    },
  },
  text: {
    "& span": {
      background:
        "linear-gradient(-60deg, #ff0040, #904e95, #e73c7e, #0080ff);",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
  projects: {
    paddingLeft: "8rem",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: ".1rem",
    },
  },
  button: {
    fontSize: "2.5rem",
    background: "linear-gradient(-60deg, #ff0040, #904e95, #e73c7e, #0080ff);",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}))

export default function Index() {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" description="Home page" image />
      <div className={classes.root}>
        <Typography variant={"h1"} className={classes.text} key={1}>
          David Fisher <br /> <span>Blog</span>
        </Typography>
      </div>
    </Layout>
  )
}
