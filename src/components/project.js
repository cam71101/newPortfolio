import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import GitHubIcon from "@material-ui/icons/GitHub"
import { makeStyles } from "@material-ui/core/styles"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { Button } from "@material-ui/core"
import SkillTag from "./SkillTag"

import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    marginBottom: "4rem",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridTemplateRows: "repeat(2, minmax(10px, min-content))",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(1, minmax(20px, 1fr))",
    },
  },
  projectImg: {
    height: "30rem",
    gridColumn: "1/5",
    gridRow: "1/6",
    [theme.breakpoints.down("md")]: {
      gridColumn: "1",
      gridRow: "1",
    },
  },
  projectInfo: {
    backgroundColor: "#fff",
    padding: "1rem 2rem",
    gridColumn: "4/7",
    gridRow: "2/5",
    zIndex: 10,
    borderRadius: "0.25rem",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("md")]: {
      gridColumn: "1",
      gridRow: "2",
    },
  },
  stack: {
    display: "flex",
    flexWrap: "wrap",
  },
  projectLinks: {
    marginTop: ".5rem",
  },
}))

const Project = ({ description, title, github, stack, url, image, index }) => {
  const classes = useStyles()

  return (
    <article className={classes.root}>
      <Image
        fluid={image.childImageSharp.fluid}
        className={classes.projectImg}
      />
      <div className={classes.projectInfo}>
        <Typography variant={"h4"}>{title || "default title"}</Typography>
        <Typography variant={"subtitle1"} className={classes.description}>
          {description}
        </Typography>
        <Typography className={classes.stack}>
          {stack.map(item => {
            return <SkillTag key={item.id}>{item.title}</SkillTag>
          })}
        </Typography>
        <div className={classes.projectLinks}>
          <Button href={github} target="_blank">
            <GitHubIcon fontSize="small" />
          </Button>
          <Button href={url} target="_blank">
            <ExitToAppIcon fontSize="medium" />
          </Button>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
