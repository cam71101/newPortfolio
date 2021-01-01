import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    right: 0,
    top: 0,
    backgroundColor: "white",
    width: "100%",
    zIndex: 5,
  },
  link: {
    textDecoration: "none",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  button: {
    color: theme.palette.secondary.light,
  },
  logo: {
    borderBottom: ".1rem solid #c62828",
    alignContent: "flex-start",
  },
}))

export default function ButtonAppBar(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar} variant={"regular"}>
        <Link to="/" className={classes.link}>
          <Button
            className={classes.button}
            onClick={props.projects}
            size={matches ? "small" : undefined}
          >
            {!matches ? (
              <Typography className={classes.logo} color="primary">
                DAVID FISHER
              </Typography>
            ) : (
              <Typography className={classes.logo} color="secondary">
                DF
              </Typography>
            )}
          </Button>
        </Link>
        {/* <div className={classes.buttons}>
          <Link to="/projects" className={classes.link}>
            <Button className={classes.button} onClick={props.projects}>
              Projects
            </Button>
          </Link>
          <Link to="/blogs" className={classes.link}>
            <Button className={classes.button} onClick={props.projects}>
              Blog{" "}
            </Button>
          </Link>

          <Link to="/about" className={classes.link}>
            <Button className={classes.button} onClick={props.about}>
              About
            </Button>
          </Link>
        </div> */}
      </Toolbar>
    </div>
  )
}
