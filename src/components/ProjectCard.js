import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Fade } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import Image from "gatsby-image"

const useStyles = makeStyles(theme => ({
  container: {
    width: "0%",
    display: "flex",
    flexDirection: "column",
  },
  root: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  cardMedia: {
    width: "50vw",
    height: "25vw",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
      marginBottom: "0",
      zIndex: "2",
      order: 2,
    },
  },
  description: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      order: 1,
    },
  },
  text: {
    width: "100%",
    margin: "-1rem",
    padding: "1rem",
    zIndex: "2",
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("lg")]: {
      zIndex: "1",
    },
  },
  image: {
    height: "100%",
    width: "100%",
  },
  tags: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWarp: "wrap",
  },
  title: {
    color: theme.palette.info.main,
    borderBottom: ".1rem solid",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    margin: "2rem",
  },
  line: {
    color: theme.palette.info.main,
    borderBottom: ".2rem solid red",
    width: "100%",
    marginBottom: "3rem",
    opacity: "20%",
    borderRadius: "5rem",
    marginTop: "3rem",
  },
  img: {
    width: "20rem",
  },
}))

export default function ProjectCard(props) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Fade in timeout={1000}>
      <div className={classes.container}>
        <Image fixed={props.image} className={classes.img}></Image>
      </div>
    </Fade>
  )
}
