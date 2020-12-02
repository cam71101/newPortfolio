import React from "react"

import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

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
          I'm David Fisher. <br />A <span>Software Developer</span> living in
          London.
        </Typography>
        <Typography variant={"h3"} className={classes.projects}>
          Here are some of my
          <Link to="/projects" className={classes.link}>
            <Button className={classes.button}>projects</Button>
          </Link>
        </Typography>
        <Typography variant={"h3"} className={classes.projects}>
          You can contact me
          <Button className={classes.button} href={"mailto:david@d-fisher.com"}>
            here
          </Button>
        </Typography>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
        }
      }
    }
  }
`
