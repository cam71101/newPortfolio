import React from "react"
import { Link } from "gatsby"
import { Typography } from "@material-ui/core"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

import { makeStyles } from "@material-ui/core/styles"
import Title from "../components/Title"
import Blog from "./Blog"

const Blogs = ({ data, showLink, title }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  const useStyles = makeStyles(theme => ({
    rootBlogs: {
      minHeight: "calc(100vh - 5rem - 9rem)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "4rem 0",
      width: "100%",
    },
    blogContainer: {
      width: "90vw",
      margin: "0 auto",
      maxWidth: "80rem",

      [theme.breakpoints.up("sm")]: {
        width: "95vw",
        display: "grid",
        gridTemplateColumns: "repeat( auto-fill, minmax(368px, 1fr))",
        rowGap: "2rem",
        columnGap: "2rem",
      },
    },
    blog: {
      marginBottom: "2rem",
    },
    linkContainer: {
      width: "90vw",
      display: "flex",
    },
    link: {
      margin: "auto",
      width: "100",
      padding: "10px",
      textAlign: "center",
      color: "black",
    },
    icon: {
      fontSize: ".9rem",
    },
    container: {
      width: "90vw",
      maxWidth: "80rem",
      display: "flex",
      flexDirection: "column",
    },
  }))

  const classes = useStyles()

  return (
    <section className={classes.rootBlogs}>
      <div className={classes.container}>
        <Title title={title}></Title>
      </div>
      <div
        className={classes.blogContainer}
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-easing="ease"
      >
        {blogs.slice(0, 3).map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <div className={classes.link}>
          <Link to="/blogs" className={classes.link}>
            <Typography variant={"h5"} className={classes.moreBlogs}>
              more blogs <ArrowForwardIosIcon className={classes.icon} />
            </Typography>
          </Link>
        </div>
      )}
    </section>
  )
}

export default Blogs
